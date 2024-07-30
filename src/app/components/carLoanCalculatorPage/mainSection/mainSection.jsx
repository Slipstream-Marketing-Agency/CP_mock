import { carLoanPage } from "../../../mocks/labels";
import ChooseCarDiv from "../chooseCarDiv/ChooseCarDiv";
import BannerSection from "../bannerSection/bannerSection";
import DimensionSection from "../dimensionsSection/DimensionSection";
import ComparisonSection from "../comparisonSection/ComparisonSection";
import FrequentlySearched from "../frequentlySearched/FrequentlySearched";
import LoanDetails from "../loanDetails/LoanDetails";
import { useState, useEffect } from "react";
function mainSection() {
  const [carSelected, setCarSelected] = useState(false);

  useEffect(() => {
    if (carSelected) {
      document.body.style.overflow = "";
    }
  }, [carSelected]);

  return (
    <div className="">
      <div className="text-3xl my-2">{carLoanPage.heading1}</div>
      <div className="font-thin">{carLoanPage.para1}</div>
      {/* bannersection */}
      {carSelected ? (
        <LoanDetails />
      ) : (
        <BannerSection setCarSelected={setCarSelected} />
      )}
      {/* section2 */}
      <div>
        <div className="mt-14 mb-3 text-2xl">{carLoanPage.Heading2}</div>
        <div className="grid gap-4">
          <p>{carLoanPage.para2}</p>
          <p>{carLoanPage.para2}</p>
          <p>{carLoanPage.para3}</p>
        </div>
      </div>
      {/* section3 */}
      <ChooseCarDiv />
      {/* section4 */}
      <DimensionSection />
      {/* section5 */}
      <ComparisonSection />
      {/* section6 */}
      <FrequentlySearched />
    </div>
  );
}

export default mainSection;
