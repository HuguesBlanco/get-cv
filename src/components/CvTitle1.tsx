import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';

type CvTitleProps = {
  children: string;
};

function CvTitle1({ children }: CvTitleProps): ReactElement<typeof View> {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Text
        style={{ color: '#a3c3e4', fontSize: 20, textTransform: 'uppercase' }}
      >
        {children}
      </Text>
    </View>
  );
}

export default CvTitle1;
