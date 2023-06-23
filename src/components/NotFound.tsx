import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

const NotFound: FC = () => {
  return (
    <Box my="8">
      <Container>
        <Flex align="center" justify="center">
          <Heading my="4">404 - Page Not Found</Heading>
        </Flex>
        <Link href="/" mx="auto" textAlign="center" display="block" my="4">
          Go to Home
        </Link>
      </Container>
    </Box>
  );
};

export default NotFound;
