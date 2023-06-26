'use client';

import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, IconButton } from '@chakra-ui/react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import type { Season } from '@/types/season';

type Props = {
  season: Season | null;
  navigation: 'back' | 'forward';
};

const Navigator: FC<Props> = ({ season, navigation }) => {
  const icons = {
    back: <RxChevronLeft />,
    forward: <RxChevronRight />,
  };
  const labels = {
    back: 'Previous season',
    forward: 'Next season',
  };

  const children = (
    <IconButton aria-label={labels[navigation]} icon={icons[navigation]} />
  );

  return season ? (
    <Link href={`/seasons/${season.slug}`}>{children}</Link>
  ) : (
    <Box visibility="hidden">{children}</Box>
  );
};

export default Navigator;
