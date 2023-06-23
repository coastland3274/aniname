import type { FC } from 'react';
import { Card, CardBody, Heading, VStack } from '@chakra-ui/react';
import { RxLink2, RxTwitterLogo } from 'react-icons/rx';
import IconLinkWrapper from './IconLinkWrapper';
import { getHostPathname, getTwitterUrl } from '@/lib/url';
import type { Work } from '@/types/work';

type Props = {
  work: Work;
};

const WorkCard: FC<Props> = ({ work }) => {
  return (
    <Card>
      <CardBody justifyContent="space-between" flexDir="column" display="flex">
        <Heading mb="4" size="sm">
          {work.title}
        </Heading>
        <VStack align="start">
          <IconLinkWrapper
            icon={RxLink2}
            text={getHostPathname(work.officialSiteUrl ?? '')}
            href={work.officialSiteUrl}
          />
          <IconLinkWrapper
            icon={RxTwitterLogo}
            text={work.twitterUsername}
            href={getTwitterUrl(work.twitterUsername ?? '')}
          />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default WorkCard;
