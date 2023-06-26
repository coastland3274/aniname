import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
  styles: {
    global: {
      body: {
        overflowY: 'scroll',
      },
    },
  },
});

export default theme;
