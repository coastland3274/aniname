import type { FC } from 'react';
import CustomHead from '@/components/CustomHead';
import Home from '@/components/Home';

const HomePage: FC = () => {
  return (
    <>
      <CustomHead />
      <Home />
    </>
  );
};

export default HomePage;
