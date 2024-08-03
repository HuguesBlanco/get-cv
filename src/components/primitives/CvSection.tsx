import { View } from '@react-pdf/renderer';
import { PdfViewElement } from '../types';
import CvTitle1 from './CvTitle1';

type CvSectionProps = {
  title: string;
  children: PdfViewElement | PdfViewElement[];
};

function CvSection({ title, children }: CvSectionProps): PdfViewElement {
  const contentElements = Array.isArray(children) ? children : [children];

  return (
    <View>
      <CvTitle1>{title}</CvTitle1>

      {contentElements.map((element, index) => (
        <View key={index}>{element}</View>
      ))}
    </View>
  );
}

export default CvSection;
