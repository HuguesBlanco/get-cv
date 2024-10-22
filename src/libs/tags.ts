export enum Tag {
  TARGETED_POSITION = '{{targetedPosition}}',
}

const textCorrespondingToTag = {
  [Tag.TARGETED_POSITION]: /front-end developer|développeur front-end/g,
};

export function insertTag(content: string, tag: Tag): string {
  return content.replace(textCorrespondingToTag[tag], tag);
}

export function substituteTag(
  content: string,
  tag: Tag,
  replacementValue: string,
): string {
  const tagRegex = new RegExp(tag, 'g');
  return content.replace(tagRegex, replacementValue);
}
