import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';

type CvSectionContainerProps = {
  children:
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
};

function CvSectionContainer({
  children,
}: CvSectionContainerProps): JSX.Element {
  return (
    <View style={{ padding: '5mm', paddingBottom: '10mm' }}>{children}</View>
  );
}

export default CvSectionContainer;
