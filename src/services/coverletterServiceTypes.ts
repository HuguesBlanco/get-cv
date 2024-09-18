export type CoverLetter = {
  positionAppliedFor: string;
  headline: string;
  greeting: string;
  body: Paragraph[];
  closing: string;
  signature: string;
};

export type Paragraph = {
  type: 'paragraph';
  content: ContentElement[];
};

export type ContentElement = TextContent | BulletListContent;

export type TextContent = {
  type: 'text';
  content: string[];
};

export type BulletListContent = {
  type: 'bulletList';
  content: string[];
};
