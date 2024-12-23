import { Text, View } from '@react-pdf/renderer';
import CvTextBody from '../elements/CvTextBody';
import CvParagraph from '../primitives/CvParagraph';
import CvSignature from '../primitives/CvSignature';
import { Languages, Paragraph } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

const formatDateForLetter = (date: Date, language: Languages): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const isFrench = language === Languages.FRENCH;
  const formattedDate = new Intl.DateTimeFormat(
    isFrench ? 'fr-FR' : 'en-US',
    options,
  ).format(date);

  if (isFrench) {
    const dayOfMonth = date.getDate();
    return dayOfMonth === 1
      ? `Le 1er ${formattedDate.replace('1 ', '')}`
      : `Le ${formattedDate}`;
  }

  return formattedDate;
};

type CvApplicationNarativeProps = {
  date: Date;
  structuredBodyText: Paragraph[];
  signature: string;
  language: Languages;
};

function CvApplicationNarative({
  date,
  structuredBodyText,
  signature,
  language,
}: CvApplicationNarativeProps): PdfViewElement {
  return (
    <View>
      <CvParagraph>
        <Text style={{ textAlign: 'right' }}>
          {formatDateForLetter(date, language)}
        </Text>
      </CvParagraph>

      <CvTextBody structuredText={structuredBodyText} />

      <CvSignature>{signature}</CvSignature>
    </View>
  );
}

export default CvApplicationNarative;
