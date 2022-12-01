import Head from 'next/head';
import { useMemo } from 'react';

import { PaginationResponse } from 'types/api';
import { DaoContext } from 'types/context';
import { Proposal } from 'types/proposal';

import { DaoDashboard } from 'astro_2.0/features/DaoDashboard';

import { useGetBreadcrumbsConfig } from 'hooks/useGetBreadcrumbsConfig';

import { Page } from 'pages/_app';

import { useAppVersion } from 'hooks/useAppVersion';

import { MainLayout } from 'astro_2.0/features/MainLayout';
import styles from './DaoPage.module.scss';

interface DaoHomeProps {
  daoContext: DaoContext;
  initialProposalsData: PaginationResponse<Proposal[]>;
  defaultApplicationUiVersion: number;
}

const DAOHome: Page<DaoHomeProps> = ({
  daoContext,
  defaultApplicationUiVersion,
}) => {
  const { dao, userPermissions } = daoContext;
  const { appVersion: selectedAppVersion } = useAppVersion();
  const appVersion = selectedAppVersion || defaultApplicationUiVersion;

  const breadcrumbsConfig = useGetBreadcrumbsConfig(dao.id, dao.displayName);

  const breadcrumbs = useMemo(() => {
    return [breadcrumbsConfig.ALL_DAOS_URL, breadcrumbsConfig.SINGLE_DAO_PAGE];
  }, [breadcrumbsConfig]);

  return (
    <>
      <Head>
        <title>DAO Main Page</title>
      </Head>
      {/* <NestedDaoPageWrapper
        daoContext={daoContext}
        breadcrumbs={appVersion === 3 ? undefined : breadcrumbs}
        className={styles.pageWrapper}
        header={onCreateProposal => {
          return (
            <DaoDashboardHeader
              userPermissions={userPermissions}
              dao={dao}
              className={styles.header}
              onCreateProposal={onCreateProposal}
            />
          );
        }}
      >
        <DaoDashboard
          daoContext={daoContext}
          key={`dashboard_${dao.id}`}
          className={styles.dashboard}
        />
      </NestedDaoPageWrapper> */}
      <MainLayout>
        <DaoDashboard
          daoContext={daoContext}
          key={`dashboard_${dao.id}`}
          className={styles.dashboard}
        />
      </MainLayout>
    </>
  );
};

export default DAOHome;
