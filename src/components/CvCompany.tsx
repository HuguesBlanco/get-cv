import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { Company } from '../services/cvServiceTypes';
import CvJobPosition from './CvJobPosition';
import CvTitle2 from './CvTitle2';

type CompanyAdditionalInformationProps = {
  companyData: Company;
};

function CompanyAdditionalInformation({
  companyData,
}: CompanyAdditionalInformationProps): ReactElement<typeof Text> {
  return companyData.description !== undefined ? (
    <Text>
      <Text>{companyData.description}</Text>

      {companyData.website !== undefined && (
        <Text>
          {'  •  '}
          {companyData.website}
        </Text>
      )}
    </Text>
  ) : (
    <Text>{companyData.location}</Text>
  );
}

type CvCompanyProps = {
  companyData: Company;
};

function CvCompany({ companyData }: CvCompanyProps): ReactElement<typeof View> {
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
