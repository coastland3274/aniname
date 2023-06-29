import { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { baseSeasonSlug } from '@/lib/season';

const HeroSection: FC = () => {
  return (
    <Box>
      <Container>
        <Heading
          as="h1"
          maxW="xl"
          mx="auto"
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          fontWeight="extrabold"
          lineHeight="1.3"
          textAlign="center"
        >
          Find Your Favorite Anime Name
        </Heading>
        <Text maxW="xl" mx="auto" mt="7" fontSize="lg" textAlign="center">
          Aniname is a web service that provide you with the domain names of
          official websites and Twitter usernames of animes.
        </Text>
        <Flex justify="center" pt="40px">
          <Link href={`/seasons/${baseSeasonSlug}`}>
            <Button size="lg">Seasonal Anime</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
