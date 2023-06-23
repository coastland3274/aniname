import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  text: string;
  href: string;
};

const IconLink: FC<Props> = ({ icon, text, href }) => {
  return (
    <HStack>
      <Icon as={icon} boxSize="5" />
      <Link wordBreak="break-all" href={href} noOfLines={1} target="_blank">
        {text}
      </Link>
    </HStack>
  );
};

export default IconLink;
