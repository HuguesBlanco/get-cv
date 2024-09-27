import { Text, View } from '@react-pdf/renderer';
import CvDate from '../primitives/CvDate';
import CvTitle3 from '../primitives/CvTitle3';
import { JobPosition } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvJobPositionProps = {
  jobPosition: JobPosition;
};

function CvJobPosition({ jobPosition }: CvJobPositionProps): PdfViewElement {
  return (
    <View style={{ paddingLeft: 20 }}>
      <CvTitle3
        extraContent={
          <CvDate
            startDate={jobPosition.startDate}
            endDate={jobPosition.endDate}
            isMonthDisplayed={true}
          />
        }
      >
        {jobPosition.title}
      </CvTitle3>

      <Text style={{ textAlign: 'justify' }}>{jobPosition.description}</Text>
    </View>
  );
}

export default CvJobPosition;
