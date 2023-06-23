import type { FC } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import WorkCard from './WorkCard';
import type { Work } from '@/types/work';

type Props = {
  works: Work[];
};

const WorkCardList: FC<Props> = ({ works }) => {
  return (
    <SimpleGrid minChildWidth="80" spacingX="8" spacingY="4">
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </SimpleGrid>
  );
};

export default WorkCardList;
