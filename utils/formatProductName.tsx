function formatProductName(filename: string) {
  return filename
    .replace(
      /(\d+)M(\d+)\.jpg$/i,
      (_, base, exponent) => `${base}M<sup>${exponent}</sup>`
    ) // Convert to superscript
    .replace(/\d+\.jpg$/, "") // Remove standalone numbers before .jpg
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\.jpg$/, "") // Remove .jpg extension
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize words
    .join(" ");
}

export default formatProductName;