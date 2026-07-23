import React from 'react';
import LegalPage from '../components/LegalPage';
import { privacyPolicy } from '../data/legalData';

const PrivacyInfo = () => (
  <LegalPage
    data={privacyPolicy}
    metaDescription="Read Meenakshi Pharma's Privacy Policy to understand how we collect, use, and protect your personal information."
  />
);

export default PrivacyInfo;
