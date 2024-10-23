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

  return (
    <form>
      <Checkbox
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
