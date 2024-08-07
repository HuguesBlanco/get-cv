import { Company } from '../../services/cvServiceTypes';

import CvCompany from '../elements/CvCompany';
import CvListItem from '../primitives/CvListItem';
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
          <CvListItem
            key={company.name}
            isBottomSpacingEnabled={!isLastCompany}
          >
            <CvCompany company={company} />
          </CvListItem>
        );
      })}
    </CvSection>
  );
}

export default CvWorkExperience;
