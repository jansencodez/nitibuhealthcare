import Product from "@/types/Product";

// Pharmaceutical Products – 30 mock items (will use placeholder, ignore image)
const pharmaceuticalProducts: Product[] = [...Array(30)].map((_, i) => ({
  id: `PHARMA-${i + 1}`,
  name:
    [
      "Insulin Pen Needles 32G 4mm",
      "Antibiotic Ointment 50g Tube",
      "Hemodialysis Catheter Kit",
      "IV Cannula 18G Sterile",
      "Diabetic Test Strips 100ct",
      "Hypertension Medication 30mg",
      "Cholesterol Lowering Tablets",
      "Antiseptic Solution 500ml",
      "Medical Grade Bandages",
      "Sterile Gauze Pads 10x10cm",
    ][i % 10] || `Pharmaceutical Product ${i + 1}`,
  image: `/images/products/pharma-${(i % 10) + 1}.jpg`,
  category: "pharmaceutical",
  description:
    "Professional grade medical product meeting international standards",
  specs: [
    "ISO 13485 Certified",
    "Single Use Sterile",
    "Latex Free",
    "CE Marked",
  ],
  isMock: true,
}));

// Non-Pharmaceutical Products – 30 items (non-mock: image is generated from the name)
const nonPharmaceuticalProducts: Product[] = [...Array(30)].map((_, i) => {
  const names = [
    "SYRINGE 5ML1",
    "SYRINGE 5ML",
    "SYRINGE 2ML",
    "SYRINGE 2ML1",
    "SYRINGE 20ML",
    "SYRINGE 20ML3",
    "SYRINGE 20ML1",
    "SYRINGE 10ML1",
    "SYRINGE 10ML",
    "SYRINGE 10ML2",
    "NEEDLE 23G",
    "HIGH FLUX DIALYZER 2.1M2",
    "HIGH FLUX DIALYZER 1.9M2",
    "HIGH FLUX DIALYZER 1.6M2",
    "ACID HAEMODIALYSIS POWDER",
    "HIGH FLUX DIALYZER 1.8M2",
    "HIGH FLUX DIALYZER 1.7M2",
    "BICARBONATE HAEMODIALYSIS POWDER",
  ];
  return {
    id: `NONPHARMA-${i + 1}`,
    name: names[i % names.length] || `Non-Pharmaceutical Product ${i + 1}`,
    // Even though we provide an image value, for non-mock items the image is generated from the name.
    image: `/images/products/non-pharma-${(i % 10) + 1}.jpg`,
    category: "non-pharmaceutical",
    description: "Essential medical equipment and supplies",
    specs: ["Durable Construction", "Easy Sterilization", "Ergonomic Design"],
    isMock: false,
  };
});

const allProducts = [...pharmaceuticalProducts, ...nonPharmaceuticalProducts];

export { allProducts, pharmaceuticalProducts, nonPharmaceuticalProducts };
