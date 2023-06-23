import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { RxMoon, RxSun } from 'react-icons/rx';

const Header: FC = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<RxMoon />, <RxSun />);
  const logo = useColorModeValue('/aniname_light.svg', '/aniname_dark.svg');

  return (
    <Box as="header" shadow="sm">
      <Container>
        <Flex align="center" h="16">
          <Link href="/">
            <Image alt="" src={logo} />
          </Link>
          <IconButton
            ml="auto"
            fontSize="2xl"
            aria-label=""
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
