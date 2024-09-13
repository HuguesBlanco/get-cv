import { Cv } from '../../services/cvServiceTypes';
import { Languages } from '../../types';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import CvContact from '../sections/CvContact';
import CvEducation from '../sections/CvEducation';
import CvGithub from '../sections/CvGithub';
import CvHeader from '../sections/CvHeader';
import CvLanguages from '../sections/CvLanguages';
import CvOnlineCourses from '../sections/CvOnlineCourses';
import CvSkills from '../sections/CvSkills';
import CvWorkExperience from '../sections/CvWorkExperience';
import { PdfPageElement } from '../types';

type CvResumeProps = {
  cv: Cv;
  language: Languages;
  color: string;
};

function CvResume({ cv, language, color }: CvResumeProps): PdfPageElement {
  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <CvHeader cv={cv} color={color} />
        </CvSlot>
      </CvPart>

      <CvPart layoutDirection="horizontal">
        <CvSlot
          widthPercentage={33.333}
          isBorderRightVisible={true}
          borderColor={color}
        >
          <CvContact contact={cv.contact} color={color} />
          <CvSkills skills={cv.skills} color={color} language={language} />
          <CvLanguages languages={cv.languages} color={color} />
        </CvSlot>

        <CvSlot widthPercentage={66.666}>
          <CvWorkExperience companies={cv.companies} color={color} />
        </CvSlot>
      </CvPart>

      <CvPart layoutDirection="horizontal">
        <CvSlot widthPercentage={33.333}>
          <CvOnlineCourses onlineCourses={cv.onlineCourses} color={color} />
        </CvSlot>

        <CvSlot widthPercentage={66.666}>
          <CvEducation
            educationAchievements={cv.educationAchievements}
            color={color}
          />
        </CvSlot>
      </CvPart>

      <CvPart isMarginBottomEnabled={false}>
        <CvSlot>
          <CvGithub language={language} color={color} />
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvResume;
