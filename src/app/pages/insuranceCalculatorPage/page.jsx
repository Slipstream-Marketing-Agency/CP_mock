// import Header from "../../components/insuranceQuotePage/header/Header";
// import Footer from "../../components/insuranceQuotePage/footer/Footer";
// import ComparisonSection from "../../components/insuranceQuotePage/comparisonSection/ComparisonSection";
// import RecommendationDiv from "../../components/insuranceQuotePage/recommendationDiv/RecommendationDiv";

//
// import HorizontalLinearStepper from "../../components/stepper/Stepper";
// import Stepper2 from "../../components/stepper2/Stepper2";
// import { Formikselect } from "../../components/Formikselect";
// import InsuranceQuote2 from "../../components/insuranceQuote/InsuranceQuote2";
// import SelectComponent from "../../components/selectComponent/selectComponent";
// import InsuranceQuote_old from "../../components/insuranceQuotePage/insuranceQuoteSection/InsuranceQuoteSection_old";

import InsuranceQuote from "../../components/insuranceQuotePage/insuranceQuoteSection/InsuranceQuoteSection";
import ChooseYourBrand from "../../components/insuranceQuotePage/chooseYourBrand/ChooseYourBrand";
import DimensionSection from "../../components/insuranceQuotePage/dimensionsSection/DimensionSection";
import ComparisonSection from "../../components/carLoanCalculatorPage/comparisonSection/ComparisonSection";
import Sidebar2 from "../../components/insuranceQuotePage/sidebar2/Sidebar2";
import SideBar1 from "../../components/insuranceQuotePage/sidebar1/Sidebar1";

import ChooseCarDiv from "../../components/insuranceQuotePage/chooseCarDiv/ChooseCarDiv";

function InsuranceCalculatorPage() {
  return (
    <section className="font-gilroy">
      <div className="grid sm:grid-cols-12 gap-8 py-8 px-6 sm:px-24 md:px-14  lg:px-40">
        <div className=" h-1/2 sm:col-span-3  sm:block hidden">
          <SideBar1 />
          <Sidebar2 />
          <SideBar1 />
        </div>
        <div className="sm:col-span-9">
          <InsuranceQuote />
          <ChooseCarDiv />
          <ChooseYourBrand />
          <DimensionSection />
          <ComparisonSection />

          {/* <Formikselect /> */}
          {/* <InsuranceQuote_old /> */}
          {/* <SelectComponent /> */}
          {/* <HorizontalLinearStepper /> */}
          {/* <Stepper2 /> */}
        </div>
      </div>
    </section>
  );
}

export default InsuranceCalculatorPage;
