import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import 'assets/icons';

import { CookieService } from 'services/CookieService';

import { ACCOUNT_COOKIE } from 'constants/cookies';
import { SPACE_RANCH_URL } from 'constants/routing';

import { getDefaultAppVersion } from 'utils/getDefaultAppVersion';
import { getTranslations } from 'utils/getTranslations';

type Props = {
  account: string | null;
};

export default function RootPage({ account }: Props): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.replace(SPACE_RANCH_URL);
  }, [account, router]);

  return <div />;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
}) => {
  const account = CookieService.get<string | undefined>(ACCOUNT_COOKIE);

  return {
    props: {
      ...(await getTranslations(locale)),
      ...(await getDefaultAppVersion()),
      account: account || null,
    },
  };
};
