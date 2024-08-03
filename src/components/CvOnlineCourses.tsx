import { View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvLearning from './CvLearning';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type CvOnlineCoursesProps = { cvData: CvData };

function CvOnlineCourses({ cvData }: CvOnlineCoursesProps): PdfViewElement {
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

export default CvOnlineCourses;
