import type { FC } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import NavigationBar from './NavigationBar';
import WorkCardList from './WorkCardList';
import type { Work } from '@/types/work';

type Props = {
  seasonSlug: string;
  works: Work[];
};

const Works: FC<Props> = ({ seasonSlug, works }) => {
  return (
    <Box my="8">
      <Container>
        <Flex align="center" justify="center" mb="10">
          <NavigationBar seasonSlug={seasonSlug} />
        </Flex>
        <WorkCardList works={works} />
      </Container>
    </Box>
  );
};

export default Works;
