export enum SegmentType {
  TEXT = 'text',
  BULLET_POINT = 'bullet_point',
}

export type Segment = {
  type: SegmentType;
  content: string;
};

export type Paragraph = Segment[];

export type CoverLetter = {
  headline: string;
  greeting: string;
  body: Paragraph[];
  closing: string;
  signature: string;
};
