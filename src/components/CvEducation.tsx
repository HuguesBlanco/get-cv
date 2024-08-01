import { View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { CvData } from '../services/cvServiceTypes';
import CvDate from './CvDate';
import CvParagraph from './CvParagraph';
import CvTitle1 from './CvTitle1';
import CvTitle3 from './CvTitle3';

type CvEducationProps = { cvData: CvData };

function CvEducation({ cvData }: CvEducationProps): ReactElement<typeof View> {
  return (
    <View>
      <CvTitle1>Education</CvTitle1>
      {cvData.educationAchievements.map((achievement) => (
        <View key={achievement.title}>
          <CvTitle3
            extraContent={
              <CvDate
                startDate={achievement.startDate}
                endDate={achievement.endDate}
                isMonthDisplayed={false}
              />
            }
          >
            {achievement.title}
          </CvTitle3>

          <CvParagraph>{achievement.institution}</CvParagraph>
        </View>
      ))}
    </View>
  );
}

export default CvEducation;
