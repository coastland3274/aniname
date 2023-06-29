import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { RxChevronDown } from 'react-icons/rx';
import { convert, seasonSlugs } from '@/lib/season';
import type { SeasonSlug } from '@/types/season';

type Props = {
  seasonSlug: SeasonSlug;
};

const SeasonSelector: FC<Props> = ({ seasonSlug }) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} w="40" rightIcon={<RxChevronDown />}>
        {convert(seasonSlug)}
      </MenuButton>
      <MenuList sx={{ minWidth: 'initial', overflowY: 'scroll' }} w="40" h="64">
        {seasonSlugs.map((s) => (
          <Link key={s} href={`/seasons/${s}`}>
            <MenuItem>{convert(s)}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SeasonSelector;
