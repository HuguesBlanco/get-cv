import CvBlock from '../primitives/CvBlock';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvApplicationNarative from '../sections/CvApplicationNarative';
import CvFrom from '../sections/CvFrom';
import CvLinks from '../sections/CvLinks';
import CvTo from '../sections/CvTo';
import { CoverLetter, Cv, Languages } from '../types/cvTypes';
import { PdfPageElement } from '../types/pdfTypes';

type CvCoverLetterProps = {
  cv: Cv;
  coverLetter: CoverLetter;
  language: Languages;
  color: string;
};
function CvCoverLetter({
  cv,
  coverLetter,
  language,
  color,
}: CvCoverLetterProps): PdfPageElement {
  const candidateLabel =
    language === Languages.ENGLISH ? 'Candidate' : 'Candidat';

  return (
    <CvPage>
      <CvBlock isPaddindXEnabled isMarginBottomEnabled>
        <CvHeader
          preTitle={candidateLabel}
          title={cv.targetPosition}
          tagline={coverLetter.headline}
          color={color}
        />
      </CvBlock>

      <CvBlock layoutDirection="horizontal" isExpanded>
        <CvBlock
          widthPercentage={33.333}
          isBorderRightVisible
          borderColor={color}
        >
          <CvBlock contentDistribution="start" isPaddindXEnabled>
            <CvTo
              organization="Google"
              name={{ lastName: 'Doe', firstName: 'John' }}
              contact={{
                email: 'test@test.com',
                phone: '+32 456 09 34 39',
                postalAddress: {
                  streetNumber: '456',
                  streetName: 'rue du Tilleul',
                  additionalAddressInfo: 'boite 34',
                  city: 'Bruxelles',
                  postalCode: '1000',
                  country: 'Belgique',
                },
              }}
              color={color}
            />
            <CvFrom name={cv.name} contact={cv.contact} color={color} />
          </CvBlock>

          <CvBlock isPaddindXEnabled>
            <CvLinks links={cv.links} language={language} color={color} />
          </CvBlock>
        </CvBlock>

        <CvBlock widthPercentage={66.666} isPaddindXEnabled>
          <CvApplicationNarative
            gretting={coverLetter.greeting}
            structuredBodyText={coverLetter.body}
            closing={coverLetter.closing}
            signature={coverLetter.signature}
          />
        </CvBlock>
      </CvBlock>
    </CvPage>
  );
}

export default CvCoverLetter;
