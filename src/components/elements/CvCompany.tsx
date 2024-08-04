import { Text, View } from '@react-pdf/renderer';
import { Company } from '../../services/cvServiceTypes';
import CvParagraph from '../primitives/CvParagraph';
import CvTitle2 from '../primitives/CvTitle2';
import { PdfTextElement, PdfViewElement } from '../types';
import CvJobPosition from './CvJobPosition';

type CompanyAdditionalInformationProps = {
  companyData: Company;
};

function CompanyAdditionalInformation({
  companyData,
}: CompanyAdditionalInformationProps): PdfTextElement | null {
  if (companyData.description !== undefined) {
    return (
      <Text>
        <Text>{companyData.description}</Text>

        {companyData.website !== undefined && (
          <Text>
            {'  •  '}
            {companyData.website}
          </Text>
        )}
      </Text>
    );
  } else if (companyData.location !== undefined) {
    return <Text>{companyData.location}</Text>;
  }

  return null;
}

type CvCompanyProps = {
  companyData: Company;
};

function CvCompany({ companyData }: CvCompanyProps): PdfViewElement {
  return (
    <View>
      <CvTitle2
        extraContent={
          <CompanyAdditionalInformation companyData={companyData} />
        }
      >
        {companyData.name}
      </CvTitle2>

      {companyData.jobPositions.map((jobPositionData, index) => {
        const isLastPosition = index === companyData.jobPositions.length - 1;
        return (
          <CvParagraph
            key={jobPositionData.title}
            isBottomSpacingEnabled={!isLastPosition}
          >
            <CvJobPosition jobPositionData={jobPositionData} />
          </CvParagraph>
        );
      })}
    </View>
  );
}

export default CvCompany;
