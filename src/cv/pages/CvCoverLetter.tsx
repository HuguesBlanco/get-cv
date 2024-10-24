import CvBlock from '../primitives/CvBlock';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvApplicationNarative from '../sections/CvApplicationNarative';
import CvFrom from '../sections/CvFrom';
import CvLinks from '../sections/CvLinks';
import CvTo from '../sections/CvTo';
import { CoverLetter, Cv, Languages, Recipient } from '../types/cvTypes';
import { PdfPageElement } from '../types/pdfTypes';

type CvCoverLetterProps = {
  cv: Cv;
  coverLetter: CoverLetter;
  recipient: Recipient | undefined;
  language: Languages;
  color: string;
};
function CvCoverLetter({
  cv,
  coverLetter,
  recipient,
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
          title={cv.targetedPosition}
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
              organization={recipient?.organization}
              name={recipient?.name}
              contact={recipient?.contact}
              language={language}
              color={color}
            />

            <CvFrom
              name={cv.name}
              contact={cv.contact}
              language={language}
              color={color}
            />
          </CvBlock>

          <CvBlock isPaddindXEnabled>
            <CvLinks links={cv.links} language={language} color={color} />
          </CvBlock>
        </CvBlock>

        <CvBlock widthPercentage={66.666} isPaddindXEnabled>
          <CvApplicationNarative
            date={coverLetter.date}
            gretting={coverLetter.greeting}
            structuredBodyText={coverLetter.body}
            closing={coverLetter.closing}
            signature={coverLetter.signature}
            language={language}
          />
        </CvBlock>
      </CvBlock>
    </CvPage>
  );
}

export default CvCoverLetter;
