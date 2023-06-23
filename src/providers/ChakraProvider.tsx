import type { FC, ReactNode } from 'react';
import { ChakraProvider as Provider } from '@chakra-ui/react';
import theme from '@/styles/theme';

type Props = {
  children: ReactNode;
};

const ChakraProvider: FC<Props> = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ChakraProvider;
