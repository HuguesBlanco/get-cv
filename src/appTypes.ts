import { Contact, Name } from './services/cvServiceTypes';

/**
 * List of available languages for the app\
 * Values follows  ISO 639-1 (https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), and are then possible values for HTML lang attribute.
 */
export enum Languages {
  ENGLISH = 'en',
  FRENCH = 'fr',
}

export type Recipient = {
  name?: Partial<Name>;
  organization?: string;
  contact?: Contact;
};
