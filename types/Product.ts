export default interface Product {
  id: string;
  name: string;
  image: string; // This field exists but will be ignored for mock products
  category: "pharmaceutical" | "non-pharmaceutical" | "hospital-equipment";
  description: string;
  specs: string[];
  related?: string[];
  isMock?: boolean;
}
