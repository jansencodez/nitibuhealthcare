import Product from "@/types/Product";

// Existing pharmaceutical product names (unchanged)
const pharmaNames = [
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
  "Surgical Gloves Latex-Free",
  "Wound Closure Strips 10 Pack",
  "Oral Rehydration Salts 500g",
  "Pain Relief Gel 100g",
  "Vitamin D3 Supplements 1000IU",
  "Cough Suppressant Syrup 250ml",
  "Allergy Relief Tablets 10mg",
  "Electrolyte Infusion IV 500ml",
  "Antifungal Cream 50g",
  "Blood Pressure Monitor",
  "Compression Stockings Medium",
  "Oxygen Nasal Cannula",
  "Sterile Surgical Sutures",
  "Digital Thermometer",
  "Blood Glucose Monitor",
  "Liver Support Capsules",
  "Probiotic Supplements",
  "Ear Infection Drops",
  "Anti-Dandruff Shampoo 200ml",
  "Respiratory Inhaler 200 Doses",
];

// New list of hospital equipment names
const hospitalEquipmentNames = [
  "Patient Monitor Multiparameter",
  "Defibrillator AED",
  "Surgical Operating Table",
  "Anesthesia Machine",
  "Ventilator ICU",
  "Ultrasound Machine Portable",
  "X-Ray Machine Digital",
  "Infusion Pump",
  "ECG Machine 12-Lead",
  "Hospital Bed Motorized",
  "Surgical Lights LED",
  "Autoclave Sterilizer 50L",
  "Oxygen Concentrator 10LPM",
  "Pulse Oximeter Fingertip",
  "Nebulizer Machine",
  "Suction Apparatus",
  "Endoscopy System",
  "C-Arm Fluoroscopy Unit",
  "Dialysis Machine",
  "Incubator Neonatal",
  "Blood Warmer",
  "Laparoscopy Tower",
  "Crash Cart Emergency",
  "MRI Scanner 1.5T",
  "CT Scanner 64-Slice",
  "Portable Vital Signs Monitor",
  "Electrocautery Unit",
  "Fetal Doppler",
  "Medical Refrigerator",
  "Wheelchair Electric",
];

// Existing pharmaceutical products (unchanged)
const pharmaceuticalProducts: Product[] = [...Array(30)].map((_, i) => ({
  id: `PHARMA-${i + 1}`,
  name: pharmaNames[i % pharmaNames.length],
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
  isMock: false,
}));

// Existing non-pharmaceutical products (unchanged)
const nonPharmaNames = [
  "SYRINGE 5ML",
  "SYRINGE 2ML",
  "SYRINGE 20ML",
  "SYRINGE 10ML",
  "NEEDLE 23G",
  "HIGH FLUX DIALYZER 2.1M2",
  "HIGH FLUX DIALYZER 1.9M2",
  "HIGH FLUX DIALYZER 1.6M2",
  "ACID HAEMODIALYSIS POWDER",
  "HIGH FLUX DIALYZER 1.8M2",
  "HIGH FLUX DIALYZER 1.7M2",
  "BICARBONATE HAEMODIALYSIS POWDER",
  "Medical Waste Disposal Bags",
  "Disposable Face Masks",
  "Surgical Gown Level 3",
  "Sterile Alcohol Swabs",
  "Hand Sanitizer 500ml",
  "Protective Eye Goggles",
  "N95 Respirator Mask",
  "Disposable Shoe Covers",
  "Biohazard Spill Kit",
  "Blood Collection Tubes",
  "Sterile Scalpels",
  "ECG Electrodes Pack",
  "IV Drip Set",
  "Medical Examination Table",
  "Surgical Head Cap",
  "Wheelchair Foldable",
  "Disposable Bed Pads",
  "First Aid Kit Advanced",
];

const nonPharmaceuticalProducts: Product[] = [...Array(30)].map((_, i) => {
  const name = nonPharmaNames[i % nonPharmaNames.length];

  return {
    id: `NONPHARMA-${i + 1}`,
    name,
    image: `/api/og?name=${encodeURIComponent(name)}`,
    category: "non-pharmaceutical",
    description: "Essential medical equipment and supplies",
    specs: ["Durable Construction", "Easy Sterilization", "Ergonomic Design"],
    isMock: false,
  };
});

// New hospital equipment products
const hospitalEquipment: Product[] = [...Array(30)].map((_, i) => ({
  id: `EQUIP-${i + 1}`,
  name: hospitalEquipmentNames[i % hospitalEquipmentNames.length],
  image: `/images/equipment/equip-${(i % 10) + 1}.jpg`, // Adjust image path as needed
  category: "hospital-equipment",
  description: "Advanced hospital-grade equipment for medical facilities",
  specs: [
    "High Precision Technology",
    "Certified for Hospital Use",
    "User-Friendly Interface",
    "Meets Safety Standards",
  ],
  isMock: false,
}));

// Combine all product arrays
const allProducts = [
  ...pharmaceuticalProducts,
  ...nonPharmaceuticalProducts,
  ...hospitalEquipment,
];

export {
  allProducts,
  pharmaceuticalProducts,
  nonPharmaceuticalProducts,
  hospitalEquipment,
};
