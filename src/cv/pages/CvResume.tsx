import photoUrl from '../assets/photo-cv.jpg';
import CvBlock from '../primitives/CvBlock';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvContact from '../sections/CvContact';
import CvEducation from '../sections/CvEducation';
import CvLanguages from '../sections/CvLanguages';
import CvOnlineCourses from '../sections/CvOnlineCourses';
import CvSkills from '../sections/CvSkills';
import CvWorkExperience from '../sections/CvWorkExperience';
import { Cv, Languages } from '../types/cvTypes';
import { PdfPageElement } from '../types/pdfTypes';

type CvResumeProps = {
  cv: Cv;
  language: Languages;
  color: string;
};

function CvResume({ cv, language, color }: CvResumeProps): PdfPageElement {
  return (
    <CvPage>
      <CvBlock isMarginBottomEnabled isPaddindXEnabled>
        <CvHeader
          title={cv.name.lastName ?? ''}
          preTitle={cv.name.firstName ?? ''}
          tagline={cv.objective}
          imageSource={photoUrl}
          color={color}
        />
      </CvBlock>

      <CvBlock layoutDirection="horizontal" isMarginBottomEnabled>
        <CvBlock
          widthPercentage={33.333}
          isBorderRightVisible={true}
          borderColor={color}
        >
          <CvBlock isPaddindXEnabled isMarginBottomEnabled>
            <CvContact contact={cv.contact} langage={language} color={color} />
          </CvBlock>

          <CvBlock isPaddindXEnabled isMarginBottomEnabled>
            <CvSkills skills={cv.skills} color={color} language={language} />
          </CvBlock>

          <CvBlock isPaddindXEnabled>
            <CvLanguages
              knownLanguages={cv.languages}
              language={language}
              color={color}
            />
          </CvBlock>
        </CvBlock>

        <CvBlock widthPercentage={66.666} isPaddindXEnabled>
          <CvWorkExperience
            companies={cv.companies}
            language={language}
            color={color}
          />
        </CvBlock>
      </CvBlock>

      <CvBlock layoutDirection="horizontal">
        <CvBlock widthPercentage={33.333} isPaddindXEnabled>
          <CvOnlineCourses
            onlineCourses={cv.onlineCourses}
            language={language}
            color={color}
          />
        </CvBlock>

        <CvBlock widthPercentage={66.666} isPaddindXEnabled>
          <CvEducation
            educationAchievements={cv.educationAchievements}
            language={language}
            color={color}
          />
        </CvBlock>
      </CvBlock>
    </CvPage>
  );
}

export default CvResume;
