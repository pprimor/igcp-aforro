/**
 * Triggers a browser download for a text file (CSV export in the playground).
 */
export function downloadTextFile(
  filename: string,
  content: string,
  mime = 'text/csv;charset=utf-8',
): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = 'noopener';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
