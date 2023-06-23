import type { FC, ReactNode } from 'react';
import ChakraProvider from './ChakraProvider';

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Provider;
