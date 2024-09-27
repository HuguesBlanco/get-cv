import {
  Document,
  DocumentProps,
  Page,
  PageProps,
  PDFViewer,
  PDFViewerProps,
  Svg,
  SVGProps,
  SVGTextProps,
  Text,
  TextProps,
  View,
  ViewProps,
} from '@react-pdf/renderer';
import { PropsWithChildren, ReactElement } from 'react';

/**
 * Represents a `<Document>` element from the react-pdf library.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfDocumentElement = ReactElement<
  PropsWithChildren<DocumentProps>,
  typeof Document
>;

/**
 * Represents a `<PDFViewer>` element from the react-pdf library.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfViewerElement = ReactElement<PDFViewerProps, typeof PDFViewer>;

/**
 * Represents a `<Page>` element from the react-pdf library.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfPageElement = ReactElement<PageProps, typeof Page>;

/**
 * Represents a `<View>` element from the react-pdf library.
 *
 * Warning: There are nesting restrictions, e.g., `<View>` elements cannot be children of `<Text>` elements.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfViewElement = ReactElement<
  PropsWithChildren<ViewProps>,
  typeof View
>;

/**
 * Represents a `<Text>` element from the react-pdf library.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfTextElement = ReactElement<
  PropsWithChildren<TextProps> | SVGTextProps,
  typeof Text
>;

/**
 * Represents an `<Svg>` element from the react-pdf library.
 *
 * Note: This type is mainly for informational purposes. TypeScript treats all JSX return types as JSX.Element, so it will not enforce this type during compilation.
 */
export type PdfSvgElement = ReactElement<
  PropsWithChildren<SVGProps>,
  typeof Svg
>;
