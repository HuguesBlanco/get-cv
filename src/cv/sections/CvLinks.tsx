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
  // TODO: define margins in regard of other margin of the  document (link to other margins ?)

  const githubText =
    language === Languages.FRENCH
      ? "Ce document a été généré avec JavaScript. Vous pouvez explorer le code de l'application."
      : 'This document was generated using JavaScript. You can explore the code behind the app.';
  const linkedinText =
    language === Languages.FRENCH
      ? "N'hésitez pas à me connecter."
      : 'Feel free to connect with me.';

  return (
    <View>
      <CvTitle1 color={color}>Find&nbsp;Me&nbsp;Online</CvTitle1>

      <View style={{ marginBottom: '8mm' }}>
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
