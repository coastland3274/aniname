import {
  addQuarters,
  addWeeks,
  eachQuarterOfInterval,
  getMonth,
  getYear,
} from 'date-fns';
import { Season, SeasonType } from '@/types/season';

const baseDate = addWeeks(new Date(), 1);

const dates = eachQuarterOfInterval({
  start: new Date('2010-04-01'),
  end: addQuarters(baseDate, 1),
}).reverse();

const _seasons: Record<SeasonType, string[]> = {
  slug: ['winter', 'spring', 'summer', 'autumn'],
  en: ['Winter', 'Spring', 'Summer', 'Autumn'],
};

const toString = (date: Date, type: SeasonType) => {
  const year = getYear(date);
  const index = Math.floor(getMonth(date) / 3);
  switch (type) {
    case 'slug':
      return `${year}-${_seasons.slug[index]}`;
    case 'en':
      return `${_seasons.en[index]} ${year}`;
  }
};

export const baseDateSlug = toString(baseDate, 'slug');

export const seasons: Season[] = dates.map((date) => ({
  slug: toString(date, 'slug'),
  en: toString(date, 'en'),
}));

const indexOf = (value: string, type: SeasonType) => {
  return seasons.findIndex((season) => season[type] === value);
};

export const getAdjacent = (value: string, type: SeasonType) => {
  const index = indexOf(value, type);

  return {
    prev: seasons[index + 1],
    current: seasons[index],
    next: seasons[index - 1],
  };
};

export const convert = (
  value: string,
  typeFrom: SeasonType,
  typeTo: SeasonType
) => {
  return seasons[indexOf(value, typeFrom)][typeTo];
};
