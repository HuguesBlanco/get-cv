import { View } from '@react-pdf/renderer';
import CvLearning from '../elements/CvLearning';
import { isLastElement } from '../libs/arrayUtils';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { EducationAchievement } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvEducationProps = {
  educationAchievements: EducationAchievement[];
  color: string;
};

function CvEducation({
  educationAchievements,
  color,
}: CvEducationProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>Education</CvTitle1>

      {educationAchievements.map((achievement, index) => (
        <CvListItem
          key={achievement.title}
          isBottomSpacingEnabled={!isLastElement(index, educationAchievements)}
        >
          <CvLearning
            title={achievement.title}
            learningProvider={achievement.institution}
            dateRange={{
              start: achievement.startDate,
              end: achievement.endDate,
            }}
          />
        </CvListItem>
      ))}
    </View>
  );
}

export default CvEducation;
