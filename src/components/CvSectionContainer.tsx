import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';

export default function CvSectionContainer({
  children,
}: {
  children:
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
}): JSX.Element {
  return (
    <View style={{ padding: '5mm', paddingBottom: '10mm' }}>{children}</View>
  );
}
