import cvData from '../data/cv-en.json';
import { CvData } from './cvServiceTypes';

export const getCvData = (): CvData => {
  const typedCvData: CvData = cvData;
  return typedCvData;
};
