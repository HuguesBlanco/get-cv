import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

type CvParagraphProps = {
  children:
    | string
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
};

export default function CvParagraph({
  children,
}: CvParagraphProps): JSX.Element {
  return (
    <View style={{ paddingBottom: '10' }}>
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}
