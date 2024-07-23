export const carData = {
  Brands: ["Benz", "BMW", "Toyota"],
  carModels: {
    Benz: ["AMG", "GLE", "EQS"],

    BMW: ["M3", "X5"],

    Toyota: ["Landcruiser", "Prado"],
  },
  optionsBrand: [
    { value: "Benz", label: "Benz" },
    { value: "BMW", label: "BMW" },
    { value: "Toyota", label: "Toyota" },
  ],
  optionsModels: [
    { value: "AMG", label: "AMG" },
    { value: "GLE", label: "GLE" },
    { value: "M3", label: "M3" },
  ],
  optionsVariants: [
    { value: "AMG-petrol", label: "AMG-petrol" },
    { value: "AMG-variantB", label: "AMG-variantB" },
  ],
  optionsYears: [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ],
  optionsCities: [
    { value: "Dubai", label: "Dubai" },
    { value: "Abudhabi", label: "Abu Dhabi" },
    { value: "Ajman", label: "Ajman" },
    { value: "Sharjah", label: "Sharjah" },
    { value: "Fujairah", label: "Fujairah" },
    { value: "UmmAlQuwain", label: "Umm Al Quwain" },
    { value: "RasAlKhaimah", label: "Ras Al Khaimah" },
  ],
  optionsNationalities: [
    { value: "Indian", label: "Indian" },
    { value: "Emirati", label: "Emirati" },
    { value: "Philipino", label: "Philipino" },
    { value: "Russian", label: "Russian" },
  ],
  optionsCountry: [
    { value: "India", label: "India" },
    { value: "UAE", label: "UAE" },
    { value: "Philipines", label: "Philipines" },
    { value: "Russia", label: "Russia" },
  ],
  optionsInsurance: [
    { value: "fullyComprehensive", label: "Fully Comprehensive" },
    { value: "thirdParty", label: "Third Party" },
  ],

  variants: {
    Benz: {
      AMG: ["AMG-petrol", "AMG-variantB"],
      GLE: ["GLE petrol", "GLE variantB"],
      EQS: ["EQS-petrol", "EQS-variantB"],
    },
    BMW: {
      M3: ["M3-petrol", "M3-variantB"],
      X5: ["X5 petrol", "X5 variantB"],
    },
    Toyota: {
      Landcruiser: ["Landcruiser-petrol", "Landcruiser-variantB"],
      Prado: ["Prado petrol", "Prado variantB"],
    },
  },
  nationality: ["Indian", "Emirati", "Philipino", "Russian"],

  country: ["India", "UAE", "Philipines", "Russia"],
  insurance: ["Fully comprehensive", "Third party"],
  cities: [
    "Abudhabi",
    "Dubai",
    "Sharjah",
    "Fujairah",
    "UmmAlQuwain",
    "Ras Al Khaimah",
    "Ajman",
  ],
};
