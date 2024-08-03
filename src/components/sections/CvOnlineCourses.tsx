import { View } from '@react-pdf/renderer';
import { CvData } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

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
