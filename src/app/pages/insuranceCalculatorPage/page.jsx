import React from "react";
import Header from "../../components/insuranceQuotePage/header/Header";
import Footer from "../../components/insuranceQuotePage/footer/Footer";
import InsuranceQuote from "../../components/insuranceQuotePage/insuranceQuoteSection/InsuranceQuoteSection";
import RecommendationDiv from "../../components/insuranceQuotePage/recommendationDiv/RecommendationDiv";
import ChooseYourBrand from "../../components/insuranceQuotePage/chooseYourBrand/ChooseYourBrand";
import DimensionSection from "../../components/insuranceQuotePage/dimensionsSection/DimensionSection";
import ComparisonSection from "../../components/insuranceQuotePage/comparisonSection/ComparisonSection";
import Sidebar2 from "../../components/insuranceQuotePage/sidebar2/Sidebar2";
import SideBar1 from "../../components/insuranceQuotePage/sidebar1/Sidebar1";

// import HorizontalLinearStepper from "../../components/stepper/Stepper";
// import Stepper2 from "../../components/stepper2/Stepper2";
import SelectComponent from "../../components/selectComponent/selectComponent";
// import { Formikselect } from "../../components/Formikselect";
// import InsuranceQuote2 from "../../components/insuranceQuote/InsuranceQuote2";

function InsuranceCalculatorPage() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="m-4 grid gap-4 sm:grid-cols-12">
          <div className="min-h-[100px] rounded-lg sm:col-span-3 mx-6 sm:block hidden">
            <SideBar1 />
            <Sidebar2 />
            <SideBar1 />
          </div>
          <div className=" rounded-lg sm:col-span-9">
            {/* <Formikselect /> */}
            {/* <InsuranceQuote2 /> */}
            <InsuranceQuote />
            <RecommendationDiv />
            <ChooseYourBrand />
            <DimensionSection />
            <ComparisonSection />

            <SelectComponent />
            {/* <HorizontalLinearStepper /> */}
            {/* <Stepper2 /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InsuranceCalculatorPage;
