export type TextSegment = {
  type: 'text';
  content: string;
};

export type BulletPointSegment = {
  type: 'bulletPoint';
  content: string;
};

export type Segment = TextSegment | BulletPointSegment;

export type Paragraph = Segment[];

export type CoverLetter = {
  headline: string;
  greeting: string;
  body: Paragraph[];
  closing: string;
  signature: string;
};
