import { Text, View } from '@react-pdf/renderer';

type CvTitleProps = {
  children: string;
};

function CvTitle1({ children }: CvTitleProps): JSX.Element {
  const titleText = children.toUpperCase();

  return (
    <View style={{ paddingBottom: '10', color: '#a3c3e4', fontSize: '20' }}>
      <Text>{titleText}</Text>
    </View>
  );
}

export default CvTitle1;
