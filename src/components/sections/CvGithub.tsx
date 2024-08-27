import { Link, Text, View } from '@react-pdf/renderer';
import { Languages } from '../../types';
import { PdfViewElement } from '../types';

type CvGithubProps = {
  language: Languages;
  color: string;
};

function CvGithub({ language, color }: CvGithubProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
      <Text>
        {language === Languages.FRENCH
          ? "Vous pouvez consulter l'application ayant généré ce CV sur"
          : 'You can access the app used to generate this CV on'}{' '}
      </Text>
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
