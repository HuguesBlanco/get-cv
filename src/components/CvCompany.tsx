import { Text, View } from '@react-pdf/renderer';
import { Company } from '../services/cvServiceTypes';
import CvJobPosition from './CvJobPosition';
import CvTitle2 from './CvTitle2';
import { PdfTextElement, PdfViewElement } from './types';

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

      {companyData.jobPositions.map((jobPositionData) => (
        <CvJobPosition
          key={jobPositionData.title}
          jobPositionData={jobPositionData}
        />
      ))}
    </View>
  );
}

export default CvCompany;
