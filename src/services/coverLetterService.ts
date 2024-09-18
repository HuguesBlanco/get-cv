import coverLetterEn from '../data/cover-letter-en.json';
import coverLetterFr from '../data/cover-letter-fr.json';
import { transformIsoDatesToDateObjects } from '../utils/transformers';
import { CoverLetter } from './coverletterServiceTypes';

export function getCoverLetter(language: 'en' | 'fr' = 'en'): CoverLetter {
  const coverLetterData = language === 'en' ? coverLetterEn : coverLetterFr;

  const parsedCoverLetter = transformIsoDatesToDateObjects(
    coverLetterData,
  ) as CoverLetter;

  return parsedCoverLetter;
}
