import { View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvLearning from './CvLearning';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type OnlineCoursesProps = { cvData: CvData };

function OnlineCourses({ cvData }: OnlineCoursesProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Online courses</CvTitle1>
      {cvData.onlineCourses.map((courseData) => (
        <CvLearning
          key={courseData.credentialId}
          title={courseData.course}
          learningProvider={courseData.platform}
        />
      ))}
    </View>
  );
}

export default OnlineCourses;
