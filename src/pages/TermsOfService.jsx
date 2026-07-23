import React from 'react';
import LegalPage from '../components/LegalPage';
import { termsOfService } from '../data/legalData';

const TermsOfService = () => (
  <LegalPage
    data={termsOfService}
    metaDescription="Read Meenakshi Pharma's Terms of Service governing the use of our website and services."
  />
);

export default TermsOfService;
