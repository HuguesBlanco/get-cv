import { Text, View } from '@react-pdf/renderer';
import { Company } from '../../services/cvServiceTypes';
import CvListItem from '../primitives/CvListItem';
import CvTitle2 from '../primitives/CvTitle2';
import { PdfTextElement, PdfViewElement } from '../types';
import CvJobPosition from './CvJobPosition';

type CompanyAdditionalInformationProps = {
  company: Company;
};

function CompanyAdditionalInformation({
  company,
}: CompanyAdditionalInformationProps): PdfTextElement | null {
  if (company.description !== undefined) {
    return (
      <Text>
        <Text>{company.description}</Text>

        {company.website !== undefined && (
          <Text>
            {'  •  '}
            {company.website}
          </Text>
        )}
      </Text>
    );
  } else if (company.location !== undefined) {
    return <Text>{company.location}</Text>;
  }

  return null;
}

type CvCompanyProps = {
  company: Company;
};

function CvCompany({ company }: CvCompanyProps): PdfViewElement {
  return (
    <View>
      <CvTitle2
        extraContent={<CompanyAdditionalInformation company={company} />}
      >
        {company.name}
      </CvTitle2>

      {company.jobPositions.map((jobPosition, index) => {
        const isLastPosition = index === company.jobPositions.length - 1;
        return (
          <CvListItem
            key={jobPosition.title}
            isBottomSpacingEnabled={!isLastPosition}
          >
            <CvJobPosition jobPosition={jobPosition} />
          </CvListItem>
        );
      })}
    </View>
  );
}

export default CvCompany;
