import { CvData } from '../../services/cvServiceTypes';

import CvCompany from '../elements/CvCompany';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvWorkExperienceProps = { cvData: CvData };

function CvWorkExperience({ cvData }: CvWorkExperienceProps): PdfViewElement {
  return (
    <CvSection title="Experience">
      {cvData.companies.map((companyData, index) => {
        const isLastCompany = index === cvData.companies.length - 1;

        return (
          <CvParagraph
            key={companyData.name}
            isBottomSpacingEnabled={!isLastCompany}
          >
            <CvCompany companyData={companyData} />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvWorkExperience;
