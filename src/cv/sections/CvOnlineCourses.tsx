import { View } from '@react-pdf/renderer';
import CvLearning from '../elements/CvLearning';
import { isLastElement } from '../libs/arrayUtils';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { OnlineCourse } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvOnlineCoursesProps = { onlineCourses: OnlineCourse[]; color: string };

function CvOnlineCourses({
  onlineCourses,
  color,
}: CvOnlineCoursesProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>Courses</CvTitle1>

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
