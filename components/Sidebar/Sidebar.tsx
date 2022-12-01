import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { forwardRef, useCallback } from 'react';

import {
  ALL_FEED_URL, BOUNTIES_URL, CFC_LIBRARY,
  CREATE_DAO_URL,
  DISCOVER, MEMBERS_URL, ORGANIZATION_URL, POLLS_URL, PROPOSALS_URL, SPACE_RANCH_URL, TREASUREY_URL
} from 'constants/routing';

import { useWalletContext } from 'context/WalletContext';
import { useDaoIds } from 'hooks/useDaoIds';

import { WalletType } from 'types/config';
import { NavItem } from './components/NavItem';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { className } = props;

  const router = useRouter();
  const { t } = useTranslation();

  const { accountId, login } = useWalletContext();
  const myDaosIds = useDaoIds(accountId);

  const createDao = useCallback(() => {
    const url = { pathname: CREATE_DAO_URL, query: { step: 'info' } };

    return accountId
      ? router.push(url)
      : login(WalletType.NEAR).then(() => router.push(url));
  }, [login, router, accountId]);

  function renderHomeNavItem() {
    if (accountId) {
      return (
        <>
          {/* <NavItem
            label={t('myFeed')}
            icon="myFeed"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={MY_FEED_URL}
          />
          <NavItem
            label={t('myDaos')}
            icon="myDaos"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={MY_DAOS_URL}
          /> */}
          <NavItem
            label={t('home')}
            icon="sidebarHome"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={SPACE_RANCH_URL}
          />
          <NavItem
            label={t('members')}
            icon="filterMembers"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={MEMBERS_URL}
          />
          <NavItem
            label={t('bounties')}
            icon="sidebarBounties"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={BOUNTIES_URL}
          />
          <NavItem
            label={t('proposals')}
            icon="proposalBounty"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={PROPOSALS_URL}
          />
          <NavItem
            label={t('polls')}
            icon="stateTreasury"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={POLLS_URL}
          />
          <NavItem
            label={t('treasury')}
            icon="stateTreasury"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={TREASUREY_URL}
          />
          <NavItem
            label={t('organization')}
            icon="stateTreasury"
            className={styles.item}
            myDaosIds={myDaosIds}
            href={ORGANIZATION_URL}
          />
        </>
      );
    }

    return null;
  }

  function renderAllCommunities() {
    return (
      <>
        <NavItem
          label={t('actionsLibrary')}
          icon="proposalFunctionCall"
          className={styles.item}
          myDaosIds={myDaosIds}
          href={CFC_LIBRARY}
        />
        <NavItem
          label={t('daosAndUsers')}
          icon="allCommunity"
          className={styles.item}
          myDaosIds={myDaosIds}
          href={DISCOVER}
        />
        <NavItem
          label={t('globalFeed')}
          icon="globalFeed"
          className={styles.item}
          myDaosIds={myDaosIds}
          href={ALL_FEED_URL}
        />
      </>
    );
  }

  return (
    <aside className={cn(styles.sidebar, className)} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {/* <Logo className={styles.mainLogo} />
          <div className={styles.subheader}>
            <span>powered by</span>
            <i>
              <Icon name="logoNearFull" width={44} className={styles.logo} />
            </i>
          </div> */}
          <div className={styles.subheader}>
            <h1>SpaceRanch DAO</h1>
          </div>
        </div>
        <div>
          {renderHomeNavItem()}
          {/* {renderAllCommunities()}
          <NavItem
            className={styles.item}
            myDaosIds={myDaosIds}
            onClick={createDao}
            label={t('createNewDao')}
            icon="createNewDao"
          /> */}
        </div>
      </div>
      {/* <AppFooter /> */}
    </aside>
  );
});

Sidebar.defaultProps = {
  className: '',
};
