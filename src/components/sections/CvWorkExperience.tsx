import { Company } from '../../services/cvServiceTypes';

import CvCompany from '../elements/CvCompany';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvWorkExperienceProps = { companies: Company[] };

function CvWorkExperience({
  companies,
}: CvWorkExperienceProps): PdfViewElement {
  return (
    <CvSection title="Experience">
      {companies.map((company, index) => {
        const isLastCompany = index === companies.length - 1;

        return (
          <CvParagraph
            key={company.name}
            isBottomSpacingEnabled={!isLastCompany}
          >
            <CvCompany company={company} />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvWorkExperience;
