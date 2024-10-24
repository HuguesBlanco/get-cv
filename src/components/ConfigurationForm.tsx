import { useId } from 'react';
import { Languages, Recipient } from '../appTypes';
import Checkbox from '../ui/Checkbox';
import Textarea from '../ui/Textarea';
import TextInput from '../ui/TextInput';

export type ConfigurationFormData = {
  formLanguage: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
  date: Date;
  targetedPosition: string;
  recipient: Recipient;
  coverLetterBodyMarkup: string;
};

type ConfigurationFormProps = {
  form: ConfigurationFormData;
  setForm: (newState: ConfigurationFormData) => void;
};

function ConfigurationForm({
  form,
  setForm,
}: ConfigurationFormProps): React.JSX.Element {
  const {
    isCvIncluded,
    isCoverLetterIncluded,
    // TODO: add date
    targetedPosition,
    recipient,
    coverLetterBodyMarkup,
  } = form;

  const formId = useId();

  return (
    <form>
      <Checkbox
        id={`${formId}-is-cv-included`}
        label="CV"
        isChecked={isCvIncluded}
        onChange={(isCvInculdedNew) => {
          setForm({
            ...form,
            isCvIncluded: isCvInculdedNew,
          });
        }}
      />

      <Checkbox
        id={`${formId}-is-cover-letter-included`}
        label="Cover letter"
        isChecked={isCoverLetterIncluded}
        onChange={(isCoverLetterIncludedNew) => {
          setForm({
            ...form,
            isCoverLetterIncluded: isCoverLetterIncludedNew,
          });
        }}
      />

      <TextInput
        id={`${formId}-job-position`}
        label="Job position"
        value={targetedPosition}
        onChange={(newTargetPosition) => {
          setForm({
            ...form,
            targetedPosition: newTargetPosition,
          });
        }}
      />

      <fieldset>
        <legend>Recipent</legend>

        <TextInput
          id={`${formId}-organization-name`}
          label="Organization name"
          value={recipient.organization ?? ''}
          onChange={(newOrganizationName) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                organization: newOrganizationName,
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-first-name`}
          label="First name"
          value={recipient.name?.firstName ?? ''}
          onChange={(newFirstName) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                name: {
                  ...form.recipient.name,
                  firstName: newFirstName,
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-last-name`}
          label="Last name"
          value={recipient.name?.lastName ?? ''}
          onChange={(newLastName) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                name: {
                  ...form.recipient.name,
                  lastName: newLastName,
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-email`}
          label="Email"
          value={recipient.contact?.email ?? ''}
          onChange={(newEmail) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  email: newEmail,
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-phone`}
          label="Phone"
          value={recipient.contact?.phone ?? ''}
          onChange={(newEmail) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  phone: newEmail,
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-street-name`}
          label="Street name"
          value={recipient.contact?.postalAddress?.streetName ?? ''}
          onChange={(newStreetName) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    streetName: newStreetName,
                  },
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-street-number`}
          label="Street number"
          value={recipient.contact?.postalAddress?.streetNumber ?? ''}
          onChange={(newStreetNumber) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    streetNumber: newStreetNumber,
                  },
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-box`}
          label="Box"
          value={recipient.contact?.postalAddress?.additionalAddressInfo ?? ''}
          onChange={(newAdditionalAddressInfo) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    additionalAddressInfo: newAdditionalAddressInfo,
                  },
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-postal-code`}
          label="Postal Code"
          value={recipient.contact?.postalAddress?.postalCode ?? ''}
          onChange={(newPostalCode) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    postalCode: newPostalCode,
                  },
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-city`}
          label="City"
          value={recipient.contact?.postalAddress?.city ?? ''}
          onChange={(newCity) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    city: newCity,
                  },
                },
              },
            });
          }}
        />

        <TextInput
          id={`${formId}-country`}
          label="Country"
          value={recipient.contact?.postalAddress?.country ?? ''}
          onChange={(newCountry) => {
            setForm({
              ...form,
              recipient: {
                ...form.recipient,
                contact: {
                  ...form.recipient.contact,
                  postalAddress: {
                    ...form.recipient.contact?.postalAddress,
                    country: newCountry,
                  },
                },
              },
            });
          }}
        />
      </fieldset>

      <Textarea
        id={`${formId}-cover-letter-body`}
        label="Cover letter body"
        value={coverLetterBodyMarkup}
        onChange={(newCoverLetterBodyMarkup) => {
          setForm({
            ...form,
            coverLetterBodyMarkup: newCoverLetterBodyMarkup,
          });
        }}
      />
    </form>
  );
}

export default ConfigurationForm;
