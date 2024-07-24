import cvData from '../data/cv-en.json';
import { transformIsoDatesToDateObjects } from '../utils/transformers';
import { CvData } from './cvServiceTypes';

export function getCvData(): CvData {
  const parsedCvData = transformIsoDatesToDateObjects(cvData) as CvData;

  return parsedCvData;
}
