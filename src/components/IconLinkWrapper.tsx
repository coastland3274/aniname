import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import IconLink from './IconLink';

type props = {
  icon: IconType;
  text: string | null;
  href: string | null;
};

const IconLinkWrapper: FC<props> = ({ icon, text, href }) => {
  return (
    <Box visibility={text && href ? 'initial' : 'hidden'}>
      <IconLink icon={icon} text={text || ''} href={href || ''} />
    </Box>
  );
};

export default IconLinkWrapper;
