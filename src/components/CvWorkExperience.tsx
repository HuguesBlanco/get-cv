import { View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvCompany from './CvCompany';
import CvSectionContainer from './CvSectionContainer';
import CvTitle1 from './CvTitle1';

type CvWorkExperienceProps = { cvData: CvData };

function CvWorkExperience({ cvData }: CvWorkExperienceProps): JSX.Element {
  return (
    <CvSectionContainer>
      <View>
        <CvTitle1>Experience</CvTitle1>

        {cvData.companies.map((companyData) => (
          <CvCompany key={companyData.name} companyData={companyData} />
        ))}
      </View>
    </CvSectionContainer>
  );
}

export default CvWorkExperience;
