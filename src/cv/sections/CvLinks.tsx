import { Text, View } from '@react-pdf/renderer';
import CvMediaLink from '../elements/CvMediaLink';
import CvTitle1 from '../primitives/CvTitle1';
import { Languages, Links } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvLinksProps = {
  links: Links;
  language: Languages;
  color: string;
};

function CvLinks({ links, language, color }: CvLinksProps): PdfViewElement {
  const title =
    language === Languages.FRENCH ? 'Liens' : 'Find\u00A0Me\u00A0Online';

  const githubText =
    language === Languages.FRENCH
      ? 'Ce document a été généré avec JavaScript.  Pour explorer le code source, consultez mon dépôt.'
      : 'This document was generated using JavaScript. To explore the code behind it, visit my repository.';
  const linkedinText =
    language === Languages.FRENCH
      ? "N'hésitez pas à nous connecter."
      : 'Feel free to connect with me.';

  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>

      <View style={{ marginBottom: '10mm' }}>
        <Text style={{ marginBottom: '2mm' }}>{githubText}</Text>
        <CvMediaLink href={links.githubUrl} media="github" color={color} />
      </View>

      <View>
        <Text style={{ marginBottom: '2mm' }}>{linkedinText}</Text>
        <CvMediaLink href={links.linkedinUrl} media="linkedin" color={color} />
      </View>
    </View>
  );
}

export default CvLinks;
