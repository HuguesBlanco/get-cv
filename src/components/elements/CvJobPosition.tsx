import { Text, View } from '@react-pdf/renderer';
import { JobPosition } from '../../services/cvServiceTypes';
import CvDate from '../primitives/CvDate';
import CvParagraph from '../primitives/CvParagraph';
import CvTitle3 from '../primitives/CvTitle3';
import { PdfViewElement } from '../types';

type CvJobPositionProps = {
  jobPositionData: JobPosition;
};

function CvJobPosition({
  jobPositionData,
}: CvJobPositionProps): PdfViewElement {
  return (
    <View style={{ paddingLeft: 20 }}>
      <CvTitle3
        extraContent={
          <CvDate
            startDate={jobPositionData.startDate}
            endDate={jobPositionData.endDate}
            isMonthDisplayed={true}
          />
        }
      >
        {jobPositionData.title}
      </CvTitle3>

      <CvParagraph isJustified>
        <Text>{jobPositionData.description}</Text>
      </CvParagraph>
    </View>
  );
}

export default CvJobPosition;
