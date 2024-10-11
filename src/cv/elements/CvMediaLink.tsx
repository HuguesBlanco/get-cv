import { Link, Text, View } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import { PdfViewElement } from '../types/pdfTypes';

function displayUrl(url: string): string {
  const protocolRegex = /(^\w+:|^)\/\//; // Matches protocol (http:// or https://)
  const wwwRegex = /^www\./; // Matches "www." at the start
  const queryParamsRegex = /\/?.*\?.*/; // Matches everything after "?" (query parameters)
  const trailingSlashRegex = /\/+$/; // Matches trailing slashes

  return url
    .replace(protocolRegex, '')
    .replace(wwwRegex, '')
    .replace(queryParamsRegex, '')
    .replace(trailingSlashRegex, '');
}

type Media = 'github' | 'linkedin';

type CvMediaLinkProps = {
  href: string;
  media: Media;
  color: string;
};

function CvMediaLink({ href, media, color }: CvMediaLinkProps): PdfViewElement {
  const icon = media === 'github' ? 'github' : 'linkedin';
  const label = media === 'github' ? 'GitHub' : 'LinkedIn';

  return (
    <View>
      <Link href={href} style={{ textDecoration: 'none', color: color }}>
        <CvListItem
          icon={icon}
          iconSize={10}
          isBottomSpacingEnabled={false}
          iconColor={color}
          textColor={color}
        >
          {label}
        </CvListItem>
        <Text>{displayUrl(href)}</Text>
      </Link>
    </View>
  );
}

export default CvMediaLink;
