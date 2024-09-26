/**
 * Get the current path from the URL
 * @param {string} url (optional) - The URL to extract the path from. Defaults to the current window location.
 * @returns {string} The path
 *
 * Example:
 * If href = https://www.example.com/books/fiction?sort=newest
 * Returns: /books/fiction
 */
export const getUrlPath = (url: string = window?.location?.href): string => {
  const urlObj = new URL(url);
  return urlObj.pathname;
};
