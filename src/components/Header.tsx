import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { RxMoon, RxSun } from 'react-icons/rx';
import Aniname from '@/svgs/aniname.svg';

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<RxMoon />, <RxSun />);
  const labels = {
    light: 'Use Dark Mode',
    dark: 'Use Light Mode',
  };

  return (
    <Box as="header" shadow="sm">
      <Container>
        <Flex align="center" h="16">
          <Link href="/">
            <Aniname fill={colorMode === 'light' ? 'black' : 'white'} />
          </Link>
          <IconButton
            ml="auto"
            fontSize="2xl"
            aria-label={labels[colorMode]}
            icon={colorModeIcon}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
