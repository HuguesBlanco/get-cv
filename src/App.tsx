import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Languages } from './appTypes';
import ConfigurationForm, {
  ConfigurationFormData,
} from './components/ConfigurationForm';
import Document from './components/Document';
import CvViewer from './cv/CvViewer';
import useDocumentDownload from './cv/useDownload';
import useScreenSize from './hooks/useScreenResize';
import { convertParagraphsToMarkup } from './libs/richTextParsers';
import { getCoverLetter } from './services/coverLetterService';
import { getCv } from './services/cvService';
import { AppColors } from './styles/colors';
import './styles/fonts.css';
import Button from './ui/Button';
import LoadingIcon from './ui/LoadingIcon';
import SegmentedControl from './ui/SegmentedControl';

function App(): React.JSX.Element {
  // "BindingError" Issue Explanation:
  // The @react-pdf/renderer library currently has a bug that can trigger an error when rendering multiple documents:
  // { name: "BindingError", message: 'Expected null or instance of Config, got an instance of Config' }.
  // This issue is under active investigation: https://github.com/diegomura/react-pdf/issues/2892.
  // A temporary workaround is to distinguish each document and render them sequentially, which seems to prevent the error.

  const [language, setLanguage] = useState(Languages.ENGLISH);

  const initialCv = getCv(language);
  const initialCoverLetter = getCoverLetter(language);

  const now = new Date();

  const [form, setForm] = useState<ConfigurationFormData>({
    formLanguage: language,
    isCvIncluded: true,
    isCoverLetterIncluded: true,
    date: now,
    targetedPosition: initialCv.targetedPosition,
    recipient: {},
    coverLetterBodyMarkup: convertParagraphsToMarkup(initialCoverLetter.body),
  });

  const isLanguageChangeDetected = language !== form.formLanguage;
  if (isLanguageChangeDetected) {
    // This is not an anti-pattern: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    setForm((previousForm) => ({
      ...previousForm,
      formLanguage: language,
      targetedPosition: initialCv.targetedPosition,
      coverLetterBodyMarkup: convertParagraphsToMarkup(initialCoverLetter.body),
    }));
  }

  const [debouncedForm] = useDebounce(form, 1000);

  const fileName = `hugues_blanco_alvarez_cv_${language}.pdf`;
  const downloadDocument = useDocumentDownload(
    <Document
      key="download-document" // Distinguish documents to resolve BindingError (see top note).
      initialCv={initialCv}
      initialCoverLetter={initialCoverLetter}
      form={debouncedForm}
      language={language}
    />,
    fileName,
  );
  const handleDocumentDownload = (): void => {
    downloadDocument().catch((error: unknown) => {
      console.error(error);
    });
  };

  const numberOfPages =
    debouncedForm.isCvIncluded && debouncedForm.isCoverLetterIncluded ? 2 : 1;

  const { isSmallScreen } = useScreenSize();

  // Delay preview rendering to remove BindingError (see top note).
  const [isDownloadDisplayed, setIsDownloadDisplayed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDownloadDisplayed(true);
    }, 3000);

    return (): void => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '100%' : '50% 50%',
        overflow: 'hidden',
        fontFamily: "'Source Sans 3', 'sans-serif'",
      }}
    >
      <div
        style={{
          padding: '10% 17%',
        }}
      >
        <div style={{ marginBottom: '4rem' }}>
          <SegmentedControl
            id="documents-language"
            label="Documents language"
            options={[
              { label: 'English', value: Languages.ENGLISH },
              { label: 'French', value: Languages.FRENCH },
            ]}
            selectedValue={language}
            onChange={setLanguage}
            colors={AppColors}
          />
        </div>
        <div style={{ marginBottom: '4rem' }}>
          <ConfigurationForm
            color={AppColors.PRIMARY}
            form={form}
            setForm={setForm}
          />
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <Button onClick={handleDocumentDownload} colors={AppColors}>
            Download the document
          </Button>
        </div>
      </div>

      <div style={{ backgroundColor: AppColors.GREY_REGULAR }}>
        {isDownloadDisplayed ? (
          <CvViewer numberOfPages={numberOfPages}>
            <Document
              key="preview-document" // Distinguish documents to resolve BindingError (see top note).
              initialCv={initialCv}
              initialCoverLetter={initialCoverLetter}
              form={debouncedForm}
              language={language}
            />
          </CvViewer>
        ) : (
          <div
            style={{
              paddingTop: '30rem',
            }}
          >
            <LoadingIcon colors={AppColors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
