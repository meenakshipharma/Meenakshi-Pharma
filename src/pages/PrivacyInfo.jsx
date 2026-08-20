import React from 'react';
import LegalPage from '../components/LegalPage';
import { privacyPolicy } from '../data/legalData';

const PrivacyInfo = () => (
  <LegalPage
    data={privacyPolicy}
    metaDescription="Read Meenakshi Pharma's Privacy Policy regarding data protection, website usage, and customer privacy for our Trichy operations."
    canonicalPath="/privacy-policy"
  />
);

export default PrivacyInfo;
