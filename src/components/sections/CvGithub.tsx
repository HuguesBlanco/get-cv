import { Link, Text, View } from '@react-pdf/renderer';
import { PdfViewElement } from '../types';

type CvGithubProps = {
  color: string;
};

function CvGithub({ color }: CvGithubProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
      <Text> You can access the app used to generate this CV on</Text>
      <Link
        style={{ color: color, textDecoration: 'none' }}
        href="https://github.com/HuguesBlanco"
      >
        <Text style={{ fontWeight: 'bold' }}> github.com/HuguesBlanco</Text>
      </Link>
    </View>
  );
}

export default CvGithub;
