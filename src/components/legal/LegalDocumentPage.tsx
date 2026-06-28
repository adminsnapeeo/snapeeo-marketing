import { useMemo } from 'react';
import { PageHero } from '../ui/PageHero';
import {
  extractLegalBodyHtml,
  extractLegalLastUpdated,
  extractLegalTitle,
} from '../../utils/legalHtml';

interface LegalDocumentPageProps {
  html: string;
}

export function LegalDocumentPage({ html }: LegalDocumentPageProps) {
  const title = useMemo(() => extractLegalTitle(html), [html]);
  const lastUpdated = useMemo(() => extractLegalLastUpdated(html), [html]);
  const bodyHtml = useMemo(() => extractLegalBodyHtml(html), [html]);

  return (
    <>
      <PageHero title={title} subtitle={lastUpdated} align="left" />

      <section className="section-page view-transition pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-4 py-10 md:px-8 md:py-14 lg:px-12">
          <div
            className="legal-document surface-card p-6 md:p-10 lg:p-12"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>
      </section>
    </>
  );
}
