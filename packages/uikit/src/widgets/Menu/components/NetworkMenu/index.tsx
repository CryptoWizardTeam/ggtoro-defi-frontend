import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { styled } from "styled-components";
import { Box, Flex } from "../../../../components/Box";
import { ChevronDownIcon } from "../../../../components/Svg";
import { UserMenuProps, variants } from "./types";
import MenuIcon from "./MenuIcon";
import { UserMenuItem } from "./styles";
import { useMatchBreakpoints } from "../../../../contexts";

const ChainLogo = styled.div`
  width: 36px;
  height: 36px;
  background: #212a21;
  padding: 6px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NetworkName = styled.div`
  height: 36px;
  background: #212a21;
  padding: 6px 15px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledUserMenu = styled(Flex)`
  background: linear-gradient(#010a01, #010a01) padding-box,
    linear-gradient(135deg, rgba(231, 236, 3, 0.21), rgba(41, 240, 105, 1)) border-box;
  background-color: #010a01;
  border: 1px solid #0000;
  padding: 3px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 3px;

  &:hover {
    opacity: 0.65;
  }
`;

export const LabelText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  font-size: 14px;
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  background: linear-gradient(229deg, rgb(13 28 4 / 15%) -70%, rgba(158, 255, 0, 0) 33%),
    linear-gradient(180deg, #1b1d1a 0%, #091309 100%);
  border: 1px solid rgba(249, 255, 242, 0.15);
  border-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 300px;
  visibility: visible;
  z-index: 1001;

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}

  ${UserMenuItem}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${UserMenuItem}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export const NetworkMenu: React.FC<UserMenuProps> = ({
  account,
  text,
  avatarSrc,
  avatarClassName,
  variant = variants.DEFAULT,
  children,
  disabled,
  placement = "bottom-end",
  recalculatePopover,
  ellipsis = true,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const { isMobile } = useMatchBreakpoints();

  const { styles, attributes, update } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement,
    modifiers: [{ name: "offset", options: { offset: [0, 0] } }],
  });

  const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null;

  // recalculate the popover position
  useEffect(() => {
    if (recalculatePopover && isOpen && update) update();
  }, [isOpen, update, recalculatePopover]);

  useEffect(() => {
    const showDropdownMenu = () => {
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      if (target && !tooltipRef?.contains(target)) {
        setIsOpen(false);
        evt.stopPropagation();
      }
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu);
    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen]);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      ref={setTargetRef}
      {...props}
    >
      <StyledUserMenu
        onTouchStart={() => {
          setIsOpen((s) => !s);
        }}
      >
        <ChainLogo>
          <MenuIcon className={avatarClassName} avatarSrc={avatarSrc} variant={variant} />
        </ChainLogo>
        {!isMobile && <ChevronDownIcon />}
        {!isMobile && (
          <NetworkName>
            <LabelText title={typeof text === "string" ? text || account : account}>
              {text || (ellipsis ? accountEllipsis : account)}
            </LabelText>
          </NetworkName>
        )}
      </StyledUserMenu>
      {!disabled && (
        <Menu style={styles.popper} ref={setTooltipRef} {...attributes.popper} $isOpen={isOpen}>
          <Box onClick={() => setIsOpen(false)}>{children?.({ isOpen })}</Box>
        </Menu>
      )}
    </Flex>
  );
};

export default NetworkMenu;
