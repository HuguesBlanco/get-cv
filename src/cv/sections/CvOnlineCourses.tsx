import { View } from '@react-pdf/renderer';
import CvLearning from '../elements/CvLearning';
import { isLastElement } from '../libs/arrayUtils';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Languages, OnlineCourse } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvOnlineCoursesProps = {
  onlineCourses: OnlineCourse[];
  language: Languages;
  color: string;
};

function CvOnlineCourses({
  onlineCourses,
  language,
  color,
}: CvOnlineCoursesProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'Cours' : 'Courses';
  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>

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
