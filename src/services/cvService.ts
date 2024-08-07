import cv from '../data/cv-en.json';
import { transformIsoDatesToDateObjects } from '../utils/transformers';
import { Cv } from './cvServiceTypes';

export function getCv(): Cv {
  const parsedCv = transformIsoDatesToDateObjects(cv) as Cv;

  return parsedCv;
}
