const responseMap = [
  {
    triggers: ["hello", "hi", "hey", "good morning", "good afternoon"],
    response: "Hello! How can I assist you with Nitibu Healthcare today?",
  },
  {
    triggers: ["help", "support", "assistance", "clarify"],
    response: `I'm here to help with any questions you have about Nitibu Healthcare.
      Feel free to ask about our products, services, partnerships, or quality standards.`,
  },
  {
    triggers: ["product", "offer", "sell", "provide", "supply", "item"],
    response: `We offer a comprehensive range of healthcare solutions including:
        - Pharmaceutical Products
        - Medical Equipment
        - Dialysis Supplies
        - Personal Protective Equipment (PPE)
        - Wound Care Products
      Which category are you interested in?`,
  },
  {
    triggers: ["pharmaceutical", "medicine", "drug", "medication"],
    response: `Our pharmaceutical offerings include:
        - Essential Medications (Antibiotics, antivirals, pain management)
        - Chronic Disease Treatments
        - Specialized Pharmaceuticals
        - Over-the-Counter (OTC) Products
        - Dialysis-Related Medications
      Would you like more details on a specific category?`,
  },
  {
    triggers: ["dialysis", "kidney", "renal"],
    response: `Our Nain Dialysis Center provides:
        - Hemodialysis treatments
        - Dialysis medications
        - Specialized equipment
      Currently serving 90+ patients monthly with plans for 7 regional units.
      How can I assist you with dialysis services?`,
  },
  {
    triggers: ["clinic", "pharmacy", "rural", "community"],
    response: `We're establishing clinics/pharmacies in underserved areas offering:
        - Essential consultations
        - Lab tests
        - Pharmacy services
      How can we assist you with this initiative?`,
  },
  {
    triggers: ["quality", "standard", "certification"],
    response: `Quality assurance measures:
        - ISO 13485 certified
        - Rigorous supplier vetting
        - Batch testing protocols
        - Continuous quality monitoring
      Any specific quality concerns?`,
  },
  {
    triggers: ["partner", "collaborate", "work with"],
    response: `Partnership opportunities include:
        - Government health initiatives
        - Medical equipment supply
        - Rural clinic operations
        - Research collaborations
      What type of partnership are you considering?`,
  },
  {
    triggers: ["contact", "email", "phone", "address", "reach"],
    response: `Contact information:
        📧 Email: info@nitibuhealthcare.com
        📞 Phone: +254 700 123456
        📍 Headquarters: AEA Plaza, Valley Rd, Nairobi, Kenya
      How else can we assist you?`,
  },
  {
    triggers: ["thank", "appreciate", "grateful", "assist"],
    response: `You're welcome! I'm here to help with any other inquiries you may have.
      Feel free to ask about our products, services, partnerships, or quality standards.`,
  },
  {
    triggers: ["wholesale", "bulk order", "large purchase"],
    response: `We offer wholesale solutions for hospitals, clinics, and pharmacies, ensuring cost-effective bulk purchasing.\nWould you like a quote or details on minimum order quantities?`,
  },

  {
    triggers: ["distribution", "logistics", "delivery"],
    response: `Our well-established distribution network ensures timely delivery of medical supplies across East and Central Africa.\nDo you need assistance with supply chain solutions?`,
  },

  {
    triggers: ["innovation", "technology", "research"],
    response: `We invest in research and development to bring cutting-edge medical technologies to the region.\nWould you like details on our latest innovations?`,
  },

  {
    triggers: ["sustainability", "eco-friendly", "green"],
    response: `We are committed to sustainable healthcare solutions, including eco-friendly medical products, waste reduction, and responsible sourcing.\nWould you like details on our sustainability initiatives?`,
  },

  {
    triggers: ["employment", "job", "career", "hiring", "internship"],
    response: `We are always looking for talented professionals to join our team!\nWould you like to know about current job openings or internship opportunities?`,
  },

  {
    triggers: ["training", "workshop", "education", "certification"],
    response: `We provide healthcare training and workshops, including:\n\t- Dialysis care training\n\t- Pharmaceutical handling\n\t- Advanced medical equipment use\nWould you like to register for a training session?`,
  },

  {
    triggers: ["home healthcare", "nursing", "personalized care"],
    response: `Our home healthcare services provide:\n\t- Elderly & chronic disease care\n\t- Home-based nursing\n\t- Remote consultations\nWould you like to arrange a consultation?`,
  },

  {
    triggers: ["pricing", "cost", "quote", "affordable"],
    response: `Our pricing varies based on product type and order quantity.\nWould you like a detailed quote for a specific product or bulk order?`,
  },

  {
    triggers: ["medical equipment", "hospital furniture", "diagnostics"],
    response: `We supply:\n\t- Diagnostic Tools\n\t- Surgical Instruments\n\t- Hospital Beds & Furniture\n\t- Monitoring Devices\nWould you like specifications or pricing details?`,
  },

  {
    triggers: ["ppe", "masks", "gloves", "protective"],
    response: `We provide a full range of PPE, including masks, gloves, gowns, and face shields.\nAre you interested in bulk purchasing or specific product details?`,
  },

  {
    triggers: ["wound care", "bandages", "antiseptic"],
    response: `Our wound care products include:\n\t- Bandages & Dressings\n\t- Antiseptics\n\t- Sutures & Staples\nWould you like details on product availability?`,
  },

  {
    triggers: ["school healthcare", "student health", "education program"],
    response: `We partner with schools to provide:\n\t- Health education workshops\n\t- Medical checkups for students\n\t- On-site healthcare support\nWould you like to collaborate or learn more?`,
  },

  {
    triggers: ["franchise", "investment", "business opportunity"],
    response: `We offer franchise opportunities for pharmacies, clinics, and distribution centers.\nWould you like to explore investment options?`,
  },

  {
    triggers: ["health promotion", "community event", "public awareness"],
    response: `We organize community health events, focusing on:\n\t- Chronic disease prevention\n\t- Public health awareness\n\t- Free health checkups\nWould you like to participate or sponsor an event?`,
  },

  {
    triggers: ["customized solution", "tailored", "specific needs"],
    response: `We understand that each client and community is unique.\nWould you like a customized healthcare solution designed for your needs?`,
  },
];

export default responseMap;
