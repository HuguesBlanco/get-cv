import { Path, Svg } from '@react-pdf/renderer';
import envelopeIcon from '../assets/envelope-solid.svg?raw';
import houseIcon from '../assets/house-solid.svg?raw';
import locationDotIcon from '../assets/location-dot-solid.svg?raw';
import phoneIcon from '../assets/phone-solid.svg?raw';
import CvError, { CvErrorElement } from './CvError';
import { PdfSvgElement } from './types';

type Icon = 'envelope' | 'house' | 'locationDot' | 'phone';

type CvIconProps = {
  icon: Icon;
  /**
   * The size is based on the typography size. It corresponds to the height of the icon in typography points (pt)
   */
  size: number;
};

function getIconSvgContent(icon: Icon): string {
  const iconMap: Record<Icon, string> = {
    envelope: envelopeIcon,
    house: houseIcon,
    locationDot: locationDotIcon,
    phone: phoneIcon,
  };

  return iconMap[icon];
}

function parseSvgAttributes(iconSvg: string): {
  viewBox: string;
  d: string;
} | null {
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(iconSvg, 'image/svg+xml');

  const svgElement = svgDocument.querySelector('svg');
  if (svgElement === null) return null;
  const viewBox = svgElement.getAttribute('viewBox');
  if (viewBox === null) return null;

  const pathElement = svgDocument.querySelector('path');
  if (pathElement === null) return null;
  const d = pathElement.getAttribute('d');
  if (d === null) return null;

  return { viewBox, d };
}

function calculateDimensions(
  size: number,
  viewBoxAttribute: string,
): { widthInPoint: string; heightInPoint: string } | null {
  const viewBoxValues = viewBoxAttribute.split(' ');

  const viewBoxWidth = Number(viewBoxValues[2]);
  if (Number.isNaN(viewBoxWidth)) return null;

  const viewBoxHeight = Number(viewBoxValues[3]);
  if (Number.isNaN(viewBoxHeight)) return null;

  if (viewBoxHeight === 0) return null;
  const aspectRatio = viewBoxWidth / viewBoxHeight;

  const height = size;
  const width = height * aspectRatio;

  const heightInPoint = `${String(height)}pt`;
  const widthInPoint = `${String(width)}pt`;

  return { widthInPoint, heightInPoint };
}

function CvIcon({ icon, size }: CvIconProps): PdfSvgElement | CvErrorElement {
  const iconSvg = getIconSvgContent(icon);

  const attributes = parseSvgAttributes(iconSvg);
  if (attributes === null)
    return <CvError message="Failed to parse SVG attributes in icon image" />;

  const calculatedSizes = calculateDimensions(size, attributes.viewBox);
  if (calculatedSizes === null)
    return <CvError message="Failed to calculate icon size" />;

  return (
    <Svg
      viewBox={attributes.viewBox}
      height={calculatedSizes.heightInPoint}
      width={calculatedSizes.widthInPoint}
    >
      <Path fill="#000000" d={attributes.d} />
    </Svg>
  );
}

export default CvIcon;
