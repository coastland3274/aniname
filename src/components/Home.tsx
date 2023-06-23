import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './HeroSection';

const Home: FC = () => {
  return (
    <Box my="24">
      <HeroSection />
    </Box>
  );
};

export default Home;
