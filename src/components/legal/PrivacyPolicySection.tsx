import privacyPolicyHtml from '../../html/snapeeo_privacy_policy.html?raw';
import { LegalDocumentPage } from './LegalDocumentPage';

export function PrivacyPolicySection() {
  return <LegalDocumentPage html={privacyPolicyHtml} />;
}
