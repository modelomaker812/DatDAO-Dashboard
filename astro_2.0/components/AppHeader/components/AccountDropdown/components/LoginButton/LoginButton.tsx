import { WalletSelectionModal } from 'astro_2.0/components/AppHeader/components/AccountDropdown/components/WalletSelectionModal';
import { Button } from 'components/button/Button';
import { useModal } from 'components/modal';
import { useWalletContext } from 'context/WalletContext';
import React from 'react';

import styles from './LoginButton.module.scss';

export const LoginButton: React.FC = () => {
  const { login, connectingToWallet } = useWalletContext();
  const [showModal] = useModal(WalletSelectionModal, {
    signIn: walletType => login(walletType),
  });

  return (
    <Button
      variant="primary"
      size="small"
      capitalize
      disabled={connectingToWallet}
      onClick={() => showModal()}
      className={styles.loginButton}
    >
      Connect wallet
    </Button>
  );
};
