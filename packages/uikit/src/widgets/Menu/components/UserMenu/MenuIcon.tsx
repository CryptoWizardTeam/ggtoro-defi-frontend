import React from "react";
import { styled } from "styled-components";
import { Variant, variants } from "./types";
import { Image } from "../../../../components/Image";
import { RefreshIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
import { Colors } from "../../../../theme/types";

const MenuIconWrapper = styled.div<{ borderColor: keyof Colors }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  justify-content: center;
  width: 28px;
  height: 28px;
  z-index: 102;
`;

const ProfileIcon = styled(Image)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;

export const NoProfileMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="primary">
    <WalletFilledIcon color="primary" width="22px" />
  </MenuIconWrapper>
);

export const PendingMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="secondary">
    <RefreshIcon color="secondary" width="22px" spin />
  </MenuIconWrapper>
);

export const WarningMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="warning">
    <WarningIcon color="warning" width="22px" />
  </MenuIconWrapper>
);

export const DangerMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="failure">
    <WarningIcon color="failure" width="22px" />
  </MenuIconWrapper>
);

const MenuIcon: React.FC<React.PropsWithChildren<{ avatarSrc?: string; variant: Variant; className?: string }>> = ({
  avatarSrc,
  variant,
  className,
}) => {
  if (variant === variants.DANGER) {
    return <DangerMenuIcon />;
  }

  if (variant === variants.WARNING) {
    return <WarningMenuIcon />;
  }

  if (variant === variants.PENDING) {
    return <PendingMenuIcon />;
  }

  if (!avatarSrc) {
    return <NoProfileMenuIcon />;
  }

  return <ProfileIcon src={avatarSrc} height={24} width={24} className={className} />;
};

export default MenuIcon;
