import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { FC, useRef } from 'react';

import { FEATURE_FLAGS } from 'constants/featureFlags';
import { useWalletContext } from 'context/WalletContext';

import { AccountDropdown } from 'astro_2.0/components/AppHeader/components/AccountDropdown';
import { AppHealth } from 'astro_2.0/features/AppHealth';
import { NotificationsBell } from './components/NotificationsBell';

import styles from './AppHeader.module.scss';

export const AppHeader: FC = () => {
  const { t } = useTranslation('common');

  const centralEl = useRef(null);
  const { accountId } = useWalletContext();

  function renderLogo(className?: string) {
    return (
      <a
        href="https://astrodao.com/"
        target="_blank"
        rel="noreferrer"
        className={cn(styles.logo, className)}
      >
        <h2>SpaceRanch DAO</h2>
      </a>
    );
  }

  const centralPartClassName = cn(styles.centralPart, {
    [styles.withoutNoties]: !FEATURE_FLAGS.NOTIFICATIONS,
  });

  return (
    <header className={styles.root}>
      {renderLogo()}
      <div className={centralPartClassName} ref={centralEl}>
        {renderLogo(styles.mobileLogo)}
      </div>
      <AppHealth />
      {!!accountId && <NotificationsBell className={styles.bell} />}
      <AccountDropdown />
    </header>
  );
};
