import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import useSecondaryColor from '@/styles/useSecondaryColor';

const Footer: FC = () => {
  const secondaryColor = useSecondaryColor();

  return (
    <Box as="footer">
      <Container>
        <Flex
          align="center"
          justify="center"
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'initial', sm: '4' }}
          h="16"
          color={secondaryColor}
        >
          <Text>
            {`The data is from `}
            <Link href="https://annict.com/" target="_blank">
              Annict
            </Link>
            {`.`}
          </Text>
          <Text>
            {`This site uses `}
            <Link
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
            >
              Google Analytics
            </Link>
            {`.`}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
