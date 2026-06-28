function extractContainerHtml(html: string): string {
  const openTag = '<div class="container">';
  const start = html.indexOf(openTag);
  if (start === -1) return '';

  const contentStart = start + openTag.length;
  const bodyEnd = html.indexOf('</body>');
  const containerEnd = html.lastIndexOf('</div>', bodyEnd === -1 ? undefined : bodyEnd);

  if (containerEnd <= contentStart) return '';

  return html.slice(contentStart, containerEnd).trim();
}

export function extractLegalBodyHtml(html: string): string {
  return extractContainerHtml(html)
    .replace(/<h1>[\s\S]*?<\/h1>\s*/i, '')
    .replace(/<p class="last-updated">[\s\S]*?<\/p>\s*/i, '');
}

export function extractLegalTitle(html: string): string {
  const match = html.match(/<h1>([\s\S]*?)<\/h1>/i);
  return match?.[1]?.trim() ?? '';
}

export function extractLegalLastUpdated(html: string): string {
  const match = html.match(/<p class="last-updated">([\s\S]*?)<\/p>/i);
  return match?.[1]?.trim() ?? '';
}
