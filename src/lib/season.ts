import {
  addQuarters,
  addWeeks,
  eachQuarterOfInterval,
  getMonth,
  getYear,
} from 'date-fns';
import { SeasonSlug, SeasonType } from '@/types/season';

const baseDate = addWeeks(new Date(), 1);

const dates = eachQuarterOfInterval({
  start: new Date('2010-04-01'),
  end: addQuarters(baseDate, 1),
}).reverse();

const seasons: Record<SeasonType, string[]> = {
  slug: ['winter', 'spring', 'summer', 'autumn'],
  en: ['Winter', 'Spring', 'Summer', 'Autumn'],
};

const toString = (date: Date, type: SeasonType) => {
  const year = getYear(date);
  const index = Math.floor(getMonth(date) / 3);
  switch (type) {
    case 'slug':
      return `${year}-${seasons.slug[index]}`;
    case 'en':
      return `${seasons.en[index]} ${year}`;
  }
};

export const baseSeasonSlug = toString(baseDate, 'slug');

export const seasonSlugs: SeasonSlug[] = dates.map((date) =>
  toString(date, 'slug')
);

const indexOf = (seasonSlug: string) =>
  seasonSlugs.findIndex((slug) => slug === seasonSlug);

export const getAdjacent = (seasonSlug: string) => {
  const index = indexOf(seasonSlug);

  return {
    prev: seasonSlugs[index + 1],
    current: seasonSlugs[index],
    next: seasonSlugs[index - 1],
  };
};

export const convert = (seasonSlug: string) => {
  const [year, season] = seasonSlug.split('-');
  const index = seasons.slug.indexOf(season);

  return `${seasons.en[index]} ${year}`;
};
