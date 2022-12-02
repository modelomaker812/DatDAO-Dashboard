import {
  SPACE_RANCH_URL,
  NFTS_URL,
  MEMBERS_URL,
  BOUNTIES_URL,
  PROPOSALS_URL,
  POLLS_URL,
  TREASUREY_URL,
  ORGANIZATION_URL,
} from 'constants/routing';

import { NavItemProps } from './types';

export const HOME_CONFIG: NavItemProps = {
  icon: 'sidebarHome',
  hoverIcon: 'sidebarHome',
  href: SPACE_RANCH_URL,
  label: 'Home',
  authRequired: true,
};

export const NFT_CONFIG: NavItemProps = {
  icon: 'nfts',
  hoverIcon: 'nfts',
  href: NFTS_URL,
  label: 'Digital Assets',
  authRequired: true,
};

export const MEMBERS_CONFIG: NavItemProps = {
  icon: 'filterMembers',
  hoverIcon: 'filterMembers',
  href: MEMBERS_URL,
  label: 'Members',
  authRequired: true,
};

export const BOUNTIES_CONFIG: NavItemProps = {
  icon: 'sidebarBounties',
  hoverIcon: 'sidebarBounties',
  href: BOUNTIES_URL,
  label: 'Bounties',
  authRequired: true,
};

export const PROPOSALS_CONFIG: NavItemProps = {
  icon: 'pencil',
  hoverIcon: 'pencil',
  href: PROPOSALS_URL,
  label: 'Proposals',
  authRequired: true,
};

export const POLLS_CONFIG: NavItemProps = {
  icon: 'proposalPoll',
  hoverIcon: 'proposalPoll',
  href: POLLS_URL,
  label: 'Polls',
  authRequired: true,
};

export const TREASURY_CONFIG: NavItemProps = {
  icon: 'stateTreasury',
  hoverIcon: 'stateTreasury',
  href: TREASUREY_URL,
  label: 'Treasury',
  authRequired: true,
};

export const ORGANIZATION_CONFIG: NavItemProps = {
  icon: 'delegate',
  hoverIcon: 'delegate',
  href: ORGANIZATION_URL,
  label: 'Organization',
  authRequired: true,
};
