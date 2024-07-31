import { View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { CvData } from '../services/cvServiceTypes';
import CvCompany from './CvCompany';
import CvTitle1 from './CvTitle1';

type CvWorkExperienceProps = { cvData: CvData };

function CvWorkExperience({
  cvData,
}: CvWorkExperienceProps): ReactElement<typeof View> {
  return (
    <View>
      <CvTitle1>Experience</CvTitle1>

      {cvData.companies.map((companyData) => {
        return <CvCompany key={companyData.name} companyData={companyData} />;
      })}
    </View>
  );
}

export default CvWorkExperience;
