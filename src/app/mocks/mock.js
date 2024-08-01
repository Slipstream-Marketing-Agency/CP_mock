import carImage1 from "../../../public/volvo-img.svg";
import carImage2 from "../../../public/bmw-black.svg";
import carImage3 from "../../../public/audi-img.svg";
import carImage4 from "../../../public/jeep-image.svg";
import mistubishiIcon from "../../../public/carLoanPage/choosecar-popup/mistubishi-icon.png";
import bmwIcon from "../../../public/carLoanPage/choosecar-popup/bmw-icon.png";
import fotoniIcon from "../../../public/carLoanPage/choosecar-popup/foton-icon.png";
import abarthIcon from "../../../public/carLoanPage/choosecar-popup/abarth-icon.png";
import fiatIcon from "../../../public/carLoanPage/choosecar-popup/fiat-icon.png";
import vwIcon from "../../../public/carLoanPage/choosecar-popup/vw-icon.png";
import changanIcon from "../../../public/carLoanPage/choosecar-popup/changan-icon.png";
import toyotaIcon from "../../../public/carLoanPage/choosecar-popup/toyota-icon.png";

export const carData = {
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
    { value: "Brazil", label: "Brazil" },
  ],
  optionsInsurance: [
    { value: "fullyComprehensive", label: "Fully Comprehensive" },
    { value: "thirdParty", label: "Third Party" },
  ],

  chooseCar: [
    {
      image: carImage1,
      brand: "Volvo",
      model: "Volvo XC40",
      price: "AED 185,850* - 222,900*",
      mileage: "90",
      transmission: "Manual",
      seats: "5 seater",
      emi: "AED 3,196",
    },
    {
      image: carImage2,
      brand: "BMW",
      model: "BMW X5",
      price: "AED 185,850* - 222,900*",
      mileage: "90",
      transmission: "Manual",
      seats: "5 seater",
      emi: "AED 3,196",
    },
    {
      image: carImage3,
      brand: "Audi",
      model: "Audi Q5",
      price: "AED 185,850* - 222,900*",
      mileage: "90",
      transmission: "Manual",
      seats: "5 seater",
      emi: "AED 3,196",
    },
    {
      image: carImage1,
      brand: "Volvo",
      model: "Volvo XC40",
      price: "AED 185,850* - 222,900*",
      mileage: "90",
      transmission: "Manual",
      seats: "5 seater",
      emi: "AED 3,196",
    },
  ],
  carComparison: [
    {
      image2: carImage1,
      brand2: "Volvo",
      model2: "Volvo XC40",
      price2: "AED 456,500*",
      image1: carImage3,
      brand1: "Audi",
      model1: "Audi Q5",
      price1: "AED 185,850* - 222,900*",
    },
    {
      image2: carImage2,
      brand2: "BMW",
      model2: "BMW X5",
      price2: "AED 155,123*",
      image1: carImage4,
      brand1: "Jeep",
      model1: "Jeep Compass",
      price1: "AED 185,850* - 222,900*",
    },
    {
      image2: carImage1,
      brand2: "Volvo",
      model2: "Volvo XC40",
      price2: "AED 456,500*",
      image1: carImage3,
      brand1: "Audi",
      model1: "Audi Q5",
      price1: "AED 185,850* - 222,900*",
    },
    {
      image2: carImage2,
      brand2: "BMW",
      model2: "BMW X5",
      price2: "AED 155,123*",
      image1: carImage4,
      brand1: "Jeep",
      model1: "Jeep Compass",
      price1: "AED 185,850* - 222,900*",
    },
  ],
  popularNewCars: [
    "New Honda HRV",
    "JAC S3 PLus",
    "Audi Q7",
    "New Ford Bronco",
    "New Honda Civic",
    "New Honda HRV",
    "JAC S3 PLus",
    "Audi Q7",
    "New Ford Bronco",
    "New Honda Civic",
    "New Honda HRV",
    "JAC S3 PLus",
    "Audi Q7",
    "New Ford Bronco",
    "New Honda Civic",
    "Audi Q7",
  ],
  searchedKeywords: [
    "Top 10 Best-Selling Cars of the Year",
    "Budget-Friendly Cars Under AED 50,000",
    "Electric Vehicles: The Future of Driving",
    "SUV Showdown: Comparing the Top Models",
    "New car launches",
    "Maintenance Tips to Keep Your Car Running Smoothly",
    "Most popular new car models",
    "Top-selling new car trims",
    "Top new car demand",
    "Top-selling new car brands",
  ],
  chooseBrandModal: [
    {
      image: mistubishiIcon,
      brand: "mistubishi",
    },
    {
      image: bmwIcon,
      brand: "BMW",
    },
    {
      image: fotoniIcon,
      brand: "foton",
    },
    {
      image: abarthIcon,
      brand: "abarth",
    },
    {
      image: fiatIcon,
      brand: "fiat",
    },
    {
      image: vwIcon,
      brand: "VW",
    },
    {
      image: changanIcon,
      brand: "changan",
    },
    {
      image: toyotaIcon,
      brand: "toyota",
    },
    {
      image: mistubishiIcon,
      brand: "mistubishi",
    },
    {
      image: bmwIcon,
      brand: "BMW",
    },
    {
      image: fotoniIcon,
      brand: "foton",
    },
    {
      image: fiatIcon,
      brand: "fiat",
    },
    {
      image: vwIcon,
      brand: "VW",
    },
    {
      image: changanIcon,
      brand: "changan",
    },
  ],
  chooseModal: [
    "1 Series",
    "2 Series Convertible",
    "1 Series Coupe",
    "5 Series Sedan",
  ],
  chooseYear: ["2024", "2023", "2022", "2021"],
  chooseVariant: ["M Septronic"],
  sliderData: [
    {
      icon: changanIcon,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: carImage3,
    },
    {
      icon: vwIcon,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: carImage1,
    },
    {
      icon: fiatIcon,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: carImage2,
    },
    {
      icon: fiatIcon,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: carImage2,
    },
    {
      icon: fiatIcon,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: carImage2,
    },
  ],
};
