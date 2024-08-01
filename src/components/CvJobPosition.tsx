import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { JobPosition } from '../services/cvServiceTypes';
import CvDate from './CvDate';
import CvParagraph from './CvParagraph';
import CvTitle3 from './CvTitle3';

type CvJobPositionProps = {
  jobPositionData: JobPosition;
};

function CvJobPosition({
  jobPositionData,
}: CvJobPositionProps): ReactElement<typeof View> {
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
