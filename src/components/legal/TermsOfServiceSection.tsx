import termsOfServiceHtml from '../../html/snapeeo_terms_of_service.html?raw';
import { LegalDocumentPage } from './LegalDocumentPage';

export function TermsOfServiceSection() {
  return <LegalDocumentPage html={termsOfServiceHtml} />;
}
