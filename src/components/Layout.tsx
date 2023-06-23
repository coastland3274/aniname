import type { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

type props = {
  children: ReactNode;
};

const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
