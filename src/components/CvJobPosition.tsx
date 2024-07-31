import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { JobPosition } from '../services/cvServiceTypes';
import CvDate from './CvDate';
import CvTitle3 from './CvTitle3';

type CvJobPositionProps = {
  jobPositionData: JobPosition;
};

function CvJobPosition({
  jobPositionData,
}: CvJobPositionProps): ReactElement<typeof View> {
  return (
    <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
      <CvTitle3
        extraContent={
          <CvDate
            startDate={jobPositionData.startDate}
            {...(jobPositionData.endDate && {
              endDate: jobPositionData.endDate,
            })}
          />
        }
      >
        {jobPositionData.title}
      </CvTitle3>

      <Text style={{ textAlign: 'justify' }}>
        {jobPositionData.description}
      </Text>
    </View>
  );
}

export default CvJobPosition;
