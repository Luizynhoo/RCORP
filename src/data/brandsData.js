import { AmaWaterwats } from './brands/AmaWaterwats';
import { CelebrityCruises } from './brands/Celebrity-Cruises';
import { MSCCruzeiros } from './brands/MSC-Cruzeiros';
import { Scenic } from './brands/Scenic';
import { SwanHellenic } from './brands/Swan-Hellenic';
import { Crystal } from './brands/Crystal';

const unorderedBrandsData  = {
  'AmaWaterwats': AmaWaterwats,
  'Celebrity-Cruises': CelebrityCruises,
  'Crystal': Crystal,
  'MSC-Cruzeiros': MSCCruzeiros,
  'Scenic': Scenic,
  'Swan-Hellenic': SwanHellenic,
};

export const brandsData = Object.fromEntries(
  Object.entries(unorderedBrandsData).sort(([a], [b])=> a.localeCompare(b))
);