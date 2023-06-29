import type { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import Navigator from './Navigator';
import Selector from './Selector';
import { getAdjacent } from '@/lib/season';

type Props = {
  seasonSlug: string;
};

const NavigationBar: FC<Props> = ({ seasonSlug }) => {
  const seasons = getAdjacent(seasonSlug);

  return (
    <Flex align="center" gap={{ base: 12, md: 16 }}>
      <Navigator seasonSlug={seasons.prev} navigation="back" />
      <Selector seasonSlug={seasons.current} />
      <Navigator seasonSlug={seasons.next} navigation="forward" />
    </Flex>
  );
};

export default NavigationBar;
