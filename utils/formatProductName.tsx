function formatProductName(filename: string) {
  return filename
    .replace(
      /(\d+)M(\d+)\.jpg$/i,
      (_, base, exponent) => `${base}M<sup>${exponent}</sup>`
    ) // Convert to superscript for cases like 2M1.jpg
    .replace(/\.jpg$/i, "") // Remove .jpg extension if present
    .replace(/(^|\s)\d+(\s|$)/g, " ") // Remove standalone numbers (e.g., "123" or "image 456")
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase
    .replace(/_/g, " ") // Replace underscores with spaces
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean) // Remove empty strings from multiple spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize words
    .join(" ");
}

export default formatProductName;
