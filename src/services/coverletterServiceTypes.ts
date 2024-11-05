export enum SegmentType {
  TEXT = 'text',
  BULLET_POINT = 'bullet_point',
}
export type ContentGroup = string[];

export type Segment = {
  type: SegmentType;
  content: ContentGroup;
};

export type Paragraph = Segment[];

export type CoverLetter = {
  headline: string;
  body: Paragraph[];
  signature: string;
};
