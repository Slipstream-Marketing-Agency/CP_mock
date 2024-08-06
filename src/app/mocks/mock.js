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
import bmwM2 from "../../../public/bmw-m2.png";
import bmw1series from "../../../public/bmw-1series.png";
import newsImage1 from "../../../public/news-image1.png";
import newsImage2 from "../../../public/news-image2.png";
import newsImage3 from "../../../public/news-image3.png";
import newsImage4 from "../../../public/news-image4.png";
import newsImage5 from "../../../public/news-image5.png";
import newsImage6 from "../../../public/news-image6.png";
import articleImage1 from "../../../public/newspage-articles-image1.png";
import articleImage2 from "../../../public/newspage-articles-image2.png";

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
  compareCarsData: [
    {
      model: "M2 Coupe M Steptronic",
      price: "AED 165,500",
      type: "Coupe",
      cylinders: 6,
      displacement: 3000,
      power: 460,
      torque: 550,
      fuelType: "Petrol",
      drive: "Rear Wheel Drive",
      transmission: "Automatic",
      gears: "8-speed",
      fuelTank: 52,
      consumption: 10.4,
    },
    {
      model: "1 Series 120i",
      price: "AED 204,510",
      type: "Hatch Back",
      cylinders: 4,
      displacement: 1600,
      power: 177,
      torque: 250,
      fuelType: "Petrol",
      drive: "Front Wheel Drive",
      transmission: "Automatic",
      gears: "8-speed",
      fuelTank: 52,
      consumption: 10.4,
    },
    {
      model: "2 Series Coupe M240i xDRIVE",
      price: "AED 295,000",
      type: "Coupe",
      cylinders: 6,
      displacement: 3000,
      power: 374,
      torque: 500,
      fuelType: "Petrol",
      drive: "All Wheel Drive",
      transmission: "Automatic",
      gears: "8-speed",
      fuelTank: 52,
      consumption: 10.4,
    },
  ],
  compareCarsDetails: {
    cars: [
      {
        image: bmwM2,
        brand: "BMW",
        model: "M2 Coupe M Steptronic",
        price: "AED 165,500",
        type: "Coupe",
      },
      {
        image: bmw1series,
        brand: "BMW",
        model: "1 Series 120i",
        price: "AED 204,510",
        type: "Hatch Back",
      },
      {
        image: bmw1series,
        brand: "BMW",
        model: "2 Series Coupe M240i xDRIVE",
        price: "AED 295,000",
        type: "Coupe",
      },
    ],
    BasicInformation: {
      sections: [
        { header: "Model", field: "model" },
        { header: "Price", field: "price" },
        { header: "Type", field: "type" },
      ],
      details: [
        {
          brand: "BMW",
          model: "M2 Coupe M Steptronic",
          price: "AED 165,500",
          type: "Coupe",
        },
        {
          brand: "BMW",
          model: "1 Series 120i",
          price: "AED 204,510",
          type: "Hatch Back",
        },
        {
          brand: "BMW",
          model: "2 Series Coupe M240i xDRIVE",
          price: "AED 295,000",
          type: "Coupe",
        },
        {
          brand: "-",
          model: "-",
          price: "-",
          type: "-",
        },
      ],
    },
    Engine_and_Transmssion_Details: {
      sections: [
        { header: "No. of Cylinders", field: "cylinders" },
        { header: "Displacement (cc)", field: "displacement" },
        { header: "Power (hp)", field: "power" },
        { header: "Peak Torque (Nm)", field: "torque" },
        { header: "Fuel Type", field: "fuelType" },
        { header: "Drive", field: "drive" },
        { header: "Transmission Type", field: "transmission" },
        { header: "No. of Gears", field: "gears" },
      ],

      details: [
        {
          cylinders: 6,
          displacement: 3000,
          power: 460,
          torque: 550,
          fuelType: "Petrol",
          drive: "Rear Wheel Drive",
          transmission: "Automatic",
          gears: "8-speed",
        },
        {
          cylinders: 4,
          displacement: 1600,
          power: 177,
          torque: 250,
          fuelType: "Petrol",
          drive: "Front Wheel Drive",
          transmission: "Automatic",
          gears: "8-speed",
        },
        {
          cylinders: 6,
          displacement: 3000,
          power: 374,
          torque: 500,
          fuelType: "Petrol",
          drive: "All Wheel Drive",
          transmission: "Automatic",
          gears: "8-speed",
        },
        {
          cylinders: "-",
          displacement: "-",
          power: "-",
          torque: "-",
          fuelType: "-",
          drive: "-",
          transmission: "-",
          gears: "-",
        },
      ],
    },
    FuelEfficiency: {
      sections: [
        { header: "Fuel Tank Size (L)", field: "fuelTank" },
        { header: "Fuel Consumption (kmpl)", field: "consumption" },
      ],
      details: [
        {
          fuelTank: 52,
          consumption: 10.4,
        },
        {
          fuelTank: 25,
          consumption: 12.4,
        },
        {
          fuelTank: 13,
          consumption: 14.0,
        },
        {
          fuelTank: "-",
          consumption: "-",
        },
      ],
    },
    performance: {
      sections: [
        { header: "O to 100(s)", field: "accelaration" },
        { header: "Top Speed (km/h)", field: "topspeed" },
      ],
      details: [
        {
          accelaration: 4.1,
          topspeed: 250,
        },
        {
          accelaration: 4.1,
          topspeed: 250,
        },
        {
          accelaration: 4.1,
          topspeed: 250,
        },
        {
          accelaration: "-",
          topspeed: "-",
        },
      ],
    },
    Safety: {
      sections: [
        { header: "Front Brake", field: "frontBrake" },
        { header: "Rear Brake", field: "rearBrake" },
        { header: "Front Airbags", field: "frontAirbags" },
        { header: "Rear Airbags", field: "rearAirbags" },
        { header: "Side Airbags", field: "sideAirbags" },
      ],
      details: [
        {
          frontBrake: 4.1,
          rearBrake: 250,
          frontAirbags: "Yes",
          rearAirbags: "No",
          sideAirbags: "Yes",
        },
        {
          frontBrake: 4.1,
          rearBrake: 250,
          frontAirbags: "Yes",
          rearAirbags: "No",
          sideAirbags: "Yes",
        },
        {
          frontBrake: 4.1,
          rearBrake: 250,
          frontAirbags: "Yes",
          rearAirbags: "No",
          sideAirbags: "Yes",
        },
        {
          frontBrake: "-",
          rearBrake: "-",
          frontAirbags: "-",
          rearAirbags: "-",
          sideAirbags: "-",
        },
      ],
    },
    Dimension: {
      sections: [
        { header: "Body Type", field: "bodyType" },
        { header: "No. Of Doors", field: "noOfDoors" },
      ],
      details: [
        {
          bodyType: "SUV",
          noOfDoors: 4,
        },
        {
          bodyType: "Sedan",
          noOfDoors: 4,
        },
        {
          bodyType: "Hatchback",
          noOfDoors: 4,
        },
        {
          bodyType: "-",
          noOfDoors: "-",
        },
      ],
    },
    Interior_Details: {
      sections: [
        { header: "Leather Interior", field: "leatherInterior" },
        { header: "Fabric Interior", field: "fabricInterior" },
      ],

      details: [
        {
          leatherInterior: "Yes",
          fabricInterior: "No",
        },
        {
          leatherInterior: "Yes",
          fabricInterior: "No",
        },
        {
          leatherInterior: "Yes",
          fabricInterior: "No",
        },
        {
          leatherInterior: "-",
          fabricInterior: "-",
        },
      ],
    },
  },
  NewsReviewsSection: [
    {
      title: "All-New Geely Starry Launched In UAE At AED 84,900!",
      category: "Trending",
      date: "June 28, 2018",
      source: "CarPrices.ae",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage1,
      link: "#",
    },
    {
      title: "Lamborghini Huracan STJ Pays Homage To The Huracan Line-Up!",
      category: "Trending",
      date: "Feb 28, 2020",
      source: "CarPrices.ae",
      description:
        "Aenean2 eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage2,
      link: "#",
    },
    {
      title: "Lamborghini Huracan STJ Pays Homage To The Huracan Line-Up!",
      category: "Trending",
      date: "March 10, 2018",
      source: "CarPrices.ae",
      description:
        "Aenean3 eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage3,
      link: "#",
    },
    {
      title: "Lamborghini Huracan STJ Pays Homage To The Huracan Line-Up!",
      category: "Trending",
      date: "August 07, 2022",
      source: "CarPrices.ae",
      description:
        "Aenean4 eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage4,
      link: "#",
    },
    {
      title: "Lamborghini Huracan STJ Pays Homage To The Huracan Line-Up!",
      category: "Trending",
      date: "Jan 10, 2024",
      source: "CarPrices.ae",
      description:
        "Aenean5 eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage5,
      link: "#",
    },
    {
      title: "Lamborghini Huracan STJ Pays Homage To The Huracan Line-Up!",
      category: "Trending",
      date: "June 28, 2022",
      source: "CarPrices.ae",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
      image: newsImage6,
      link: "#",
    },
  ],
  popularTags: [
    "Mercedes-Benz",
    "Electric Cars",
    "G-class",
    "G-Wagon",
    "UAE",
    "Offers",
    "New",
    "Petrol",
    "Diesel",
    "Automatic",
    "Top",
    "Latest",
    "Audi",
    "BMW",
    "Toyota",
  ],
  articles: [
    {
      title: "Ten Pros of Applying Car Paint Protection Film (PPF)",
      image: articleImage1,
    },
    {
      title: "Lancia Returns To Rally With The Ypsilon Rally 4 H...",
      image: articleImage2,
    },
    {
      title: "Ten Pros of Applying Car Paint Protection Film (PPF)",
      image: articleImage1,
    },
    {
      title: "Lancia Returns To Rally With The Ypsilon Rally 4 H...",
      image: articleImage2,
    },
  ],
};
