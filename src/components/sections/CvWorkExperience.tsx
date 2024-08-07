import { Company } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';

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
      {companies.map((company, index) => (
        <CvListItem
          key={company.name}
          isBottomSpacingEnabled={!isLastElement(index, companies)}
        >
          <CvCompany company={company} />
        </CvListItem>
      ))}
    </CvSection>
  );
}

export default CvWorkExperience;
