import type { ParsedUrlQuery } from 'querystring';
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { sdk } from '@/lib/gql';
import { convert, seasons } from '@/lib/season';
import type { Work } from '@/types/work';
import CustomHead from '@/components/CustomHead';
import Works from '@/components/Works';

type Props = {
  seasonSlug: string;
  works: Work[];
};

type Params = ParsedUrlQuery & {
  seasonSlug: string;
};

const SeasonPage: FC<Props> = ({ seasonSlug, works }) => {
  return (
    <>
      <CustomHead title={convert(seasonSlug, 'slug', 'en')} />
      <Works seasonSlug={seasonSlug} works={works} />
    </>
  );
};

export default SeasonPage;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { seasonSlug } = params as Params;
  const _works = await sdk.getWorksBySeason({ season: seasonSlug });
  const works = _works.searchWorks?.edges
    ?.filter((edge) => edge?.node?.media === 'TV')
    .filter((edge) => edge?.node?.titleEn)
    .map((edge) => ({
      id: edge?.node?.annictId as number,
      title: edge?.node?.titleEn as string,
      officialSiteUrl: edge?.node?.officialSiteUrl ?? null,
      twitterUsername: edge?.node?.twitterUsername ?? null,
    })) as Work[];

  return {
    props: {
      seasonSlug,
      works,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = seasons.map((season) => ({
    params: { seasonSlug: season.slug },
  }));

  return { paths, fallback: false };
};
