import { Languages } from '../appTypes';
import Checkbox from '../ui/Checkbox';
import Textarea from '../ui/Textarea';
import TextInput from '../ui/TextInput';

export type ConfigurationFormData = {
  formLanguage: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
  date: Date;
  targetedPosition: string;
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
