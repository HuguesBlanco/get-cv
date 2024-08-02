import { View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvLearning from './CvLearning';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type CvEducationProps = { cvData: CvData };

function CvEducation({ cvData }: CvEducationProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Education</CvTitle1>
      {cvData.educationAchievements.map((achievement) => (
        <CvLearning
          key={achievement.title}
          title={achievement.title}
          learningProvider={achievement.institution}
          dateRange={{ start: achievement.startDate, end: achievement.endDate }}
        />
      ))}
    </View>
  );
}

export default CvEducation;
