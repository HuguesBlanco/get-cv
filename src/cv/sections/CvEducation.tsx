import { View } from '@react-pdf/renderer';
import CvLearning from '../elements/CvLearning';
import { isLastElement } from '../libs/arrayUtils';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { EducationAchievement, Languages } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvEducationProps = {
  educationAchievements: EducationAchievement[];
  language: Languages;
  color: string;
};

function CvEducation({
  educationAchievements,
  language,
  color,
}: CvEducationProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'Formation' : 'Education';

  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>

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
