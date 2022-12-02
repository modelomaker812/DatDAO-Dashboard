import Head from 'next/head';
import { useMemo, VFC } from 'react';

import { BountyContext } from 'types/bounties';
import { ProposalVariant } from 'types/proposal';

import { DaoContext } from 'types/context';

import { NestedDaoPageWrapper } from 'astro_2.0/features/pages/nestedDaoPagesContent/NestedDaoPageWrapper';
import { useGetBreadcrumbsConfig } from 'hooks/useGetBreadcrumbsConfig';

import { BountiesListView } from 'astro_2.0/features/Bounties/components/BountiesListView';
import { BountiesPageContent } from 'astro_2.0/features/pages/nestedDaoPagesContent/BountiesPageContent';
import { DaoBountiesList } from 'astro_3.0/features/Bounties/components/DaoBounties';

export interface BountiesListPageProps {
  daoContext: DaoContext;
  bountiesContext: BountyContext[];
}

const BountiesListPage: VFC<BountiesListPageProps> = ({
  daoContext,
  bountiesContext,
}) => {
  // const { useOpenSearchDataApi } = useFlags();
  const useOpenSearchDataApi = false;
  const breadcrumbsConfig = useGetBreadcrumbsConfig(
    daoContext.dao.id,
    daoContext.dao.displayName
  );

  const breadcrumbs = useMemo(() => {
    return [
      breadcrumbsConfig.ALL_DAOS_URL,
      breadcrumbsConfig.SINGLE_DAO_PAGE,
      breadcrumbsConfig.BOUNTIES,
    ];
  }, [breadcrumbsConfig]);

  function renderContent() {
    if (useOpenSearchDataApi === undefined) {
      return null;
    }

    return useOpenSearchDataApi ? (
      <BountiesPageContent daoContext={daoContext} hideFilters>
        <DaoBountiesList />
      </BountiesPageContent>
    ) : (
      <BountiesPageContent daoContext={daoContext} hideFilters>
        <BountiesListView bountiesContext={bountiesContext} />
      </BountiesPageContent>
    );
  }

  return (
    <NestedDaoPageWrapper
      daoContext={daoContext}
      breadcrumbs={breadcrumbs}
      defaultProposalType={ProposalVariant.ProposeCreateBounty}
    >
      <Head>
        <title>Bounties list</title>
      </Head>
      {renderContent()}
    </NestedDaoPageWrapper>
  );
};

export default BountiesListPage;
