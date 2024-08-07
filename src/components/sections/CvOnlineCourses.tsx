import { View } from '@react-pdf/renderer';
import { OnlineCourse } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';
import CvLearning from '../elements/CvLearning';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

type CvOnlineCoursesProps = { onlineCourses: OnlineCourse[] };

function CvOnlineCourses({
  onlineCourses,
}: CvOnlineCoursesProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Online courses</CvTitle1>

      {onlineCourses.map((course, index) => {
        return (
          <CvListItem
            key={course.credentialId}
            isBottomSpacingEnabled={!isLastElement(index, onlineCourses)}
          >
            <CvLearning
              title={course.name}
              learningProvider={course.platform}
            />
          </CvListItem>
        );
      })}
    </View>
  );
}

export default CvOnlineCourses;
