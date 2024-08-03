import { View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvCompany from './CvCompany';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type CvSectionWorkExperienceProps = { cvData: CvData };

function CvSectionWorkExperience({
  cvData,
}: CvSectionWorkExperienceProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Experience</CvTitle1>

      {cvData.companies.map((companyData) => {
        return <CvCompany key={companyData.name} companyData={companyData} />;
      })}
    </View>
  );
}

export default CvSectionWorkExperience;
