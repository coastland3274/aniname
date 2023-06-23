import type { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { RxChevronDown } from 'react-icons/rx';
import { seasons } from '@/lib/season';
import type { Season } from '@/types/season';

type Props = {
  season: Season;
};

const SeasonSelector: FC<Props> = ({ season }) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} w="40" rightIcon={<RxChevronDown />}>
        {season.en}
      </MenuButton>
      <MenuList sx={{ minWidth: 'initial', overflowY: 'scroll' }} w="40" h="64">
        {seasons.map((s) => (
          <Link key={s.slug} href={`/seasons/${s.slug}`}>
            <MenuItem>{s.en}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SeasonSelector;
