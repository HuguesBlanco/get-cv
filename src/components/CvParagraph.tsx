import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

export default function CvParagraph({
  children,
}: {
  children:
    | string
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
}): JSX.Element {
  return (
    <View style={{ paddingBottom: '10' }}>
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}
