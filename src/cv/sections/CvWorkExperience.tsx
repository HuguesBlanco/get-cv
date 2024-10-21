import { View } from '@react-pdf/renderer';
import { isLastElement } from '../libs/arrayUtils';

import CvCompany from '../elements/CvCompany';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Company, Languages } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvWorkExperienceProps = {
  companies: Company[];
  language: Languages;
  color: string;
};

function CvWorkExperience({
  companies,
  language,
  color,
}: CvWorkExperienceProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'Expériences' : 'Experience';

  return (
    <View style={{ flexGrow: 1 }}>
      <CvTitle1 color={color}>{title}</CvTitle1>

      <View style={{ flexGrow: 1, justifyContent: 'space-between' }}>
        {companies.map((company, index) => (
          <CvListItem
            key={company.name}
            isBottomSpacingEnabled={!isLastElement(index, companies)}
          >
            <CvCompany company={company} />
          </CvListItem>
        ))}
      </View>
    </View>
  );
}

export default CvWorkExperience;
