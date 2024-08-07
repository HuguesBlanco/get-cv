import { View } from '@react-pdf/renderer';
import { Skill } from '../../services/cvServiceTypes';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

type CvSkillsProps = {
  skills: Skill[];
};

function CvSkills({ skills }: CvSkillsProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Skills</CvTitle1>

      {skills.map((skill) => (
        <CvListItem key={skill} icon="circle" isBottomSpacingEnabled={false}>
          {skill}
        </CvListItem>
      ))}
    </View>
  );
}

export default CvSkills;
