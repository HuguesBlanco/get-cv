import { CvData } from '../../services/cvServiceTypes';

import CvCompany from '../elements/CvCompany';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvWorkExperienceProps = { cvData: CvData };

function CvWorkExperience({ cvData }: CvWorkExperienceProps): PdfViewElement {
  return (
    <CvSection title="Experience">
      {cvData.companies.map((companyData) => {
        return <CvCompany key={companyData.name} companyData={companyData} />;
      })}
    </CvSection>
  );
}

export default CvWorkExperience;
