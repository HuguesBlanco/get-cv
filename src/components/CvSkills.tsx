import { View } from '@react-pdf/renderer';
import { Skill } from '../services/cvServiceTypes';
import CvListItem from './CvListItem';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type CvSkillsProps = {
  skillsData: Skill[];
};

function CvSkills({ skillsData }: CvSkillsProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Skills</CvTitle1>

      {skillsData.map((skill) => (
        <CvListItem key={skill} content={skill} />
      ))}
    </View>
  );
}

export default CvSkills;
