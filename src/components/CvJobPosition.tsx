import { Text, View } from '@react-pdf/renderer';
import { JobPosition } from '../services/cvServiceTypes';
import CvDate from './CvDate';
import CvParagraph from './CvParagraph';
import CvTitle3 from './CvTitle3';
import { PdfViewElement } from './types';

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
            {...(jobPositionData.endDate && {
              endDate: jobPositionData.endDate,
            })}
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
