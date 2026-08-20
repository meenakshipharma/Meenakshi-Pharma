import React from 'react';
import LegalPage from '../components/LegalPage';
import { termsOfService } from '../data/legalData';

const TermsOfService = () => (
  <LegalPage
    data={termsOfService}
    metaDescription="Read the Terms of Service governing the use of Meenakshi Pharma's website and pharmaceutical distribution services."
    canonicalPath="/terms-of-service"
  />
);

export default TermsOfService;
