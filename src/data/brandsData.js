import { AmaWaterways } from './brands/AmaWaterways';
import { CelebrityCruises } from './brands/Celebrity-Cruises';
import { MSCCruzeiros } from './brands/MSC-Cruzeiros';
import { Scenic } from './brands/Scenic';
import { SwanHellenic } from './brands/Swan-Hellenic';
import { Crystal } from './brands/Crystal';
import { RitzCarlton } from './brands/Ritz-Carlton'

const unorderedBrandsData  = {
  'amawaterways': AmaWaterways,
  'celebrity-cruises': CelebrityCruises,
  'crystal': Crystal,
  'msc-cruceros': MSCCruzeiros,
  'scenic': Scenic,
  'swan-hellenic': SwanHellenic,
  'the-ritz-carlton-yacht-collection':RitzCarlton,
};

export const brandsData = Object.fromEntries(
  Object.entries(unorderedBrandsData).sort(([a], [b])=> a.localeCompare(b))
);