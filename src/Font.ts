import { Font } from '@react-pdf/renderer';

export function registerFont(): void {
  const isFontRegistred =
    Font.getRegisteredFontFamilies().includes('Source Sans 3');

  if (!isFontRegistred) {
    Font.register({
      family: 'Source Sans 3',
      fonts: [
        {
          src: 'src/assets/SourceSans3-Light.ttf',
          fontStyle: 'normal',
          fontWeight: 'light',
        },
        {
          src: 'src/assets/SourceSans3-Regular.ttf',
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
        {
          src: 'src/assets/SourceSans3-Bold.ttf',
          fontStyle: 'normal',
          fontWeight: 'bold',
        },
      ],
    });
  }
}
