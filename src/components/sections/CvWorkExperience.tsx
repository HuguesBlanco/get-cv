import { View } from '@react-pdf/renderer';
import { Company } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';

import CvCompany from '../elements/CvCompany';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

type CvWorkExperienceProps = { companies: Company[]; color: string };

function CvWorkExperience({
  companies,
  color,
}: CvWorkExperienceProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>Experience</CvTitle1>

      {companies.map((company, index) => (
        <CvListItem
          key={company.name}
          isBottomSpacingEnabled={!isLastElement(index, companies)}
        >
          <CvCompany company={company} />
        </CvListItem>
      ))}
    </View>
  );
}

export default CvWorkExperience;
