import cvEn from '../data/cv-en.json';
import cvFr from '../data/cv-fr.json';
import { transformIsoDatesToDateObjects } from '../libs/transformers';
import { Cv } from './cvServiceTypes';

export function getCv(language: 'en' | 'fr' = 'en'): Cv {
  const cvData = language === 'en' ? cvEn : cvFr;

  const parsedCv = transformIsoDatesToDateObjects(cvData) as Cv;

  return parsedCv;
}
