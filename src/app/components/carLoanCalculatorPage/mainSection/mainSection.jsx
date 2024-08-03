import { carLoanPage } from "../../../mocks/labels";
import ChooseCarDiv from "../chooseCarDiv/ChooseCarDiv";
import BannerSection from "../bannerSection/bannerSection";
import DimensionSection from "../dimensionsSection/DimensionSection";
import ComparisonSection from "../../common/comparisonSection/ComparisonSection";
import FrequentlySearched from "../frequentlySearched/FrequentlySearched";
import LoanDetails from "../loanDetails/LoanDetails";
import Modal from "../modal/Modal";
import { useState, useEffect } from "react";
function mainSection() {
  const [carSelected, setCarSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="">
      <div className="text-4xl leading-loose text-lightgray ">
        {carLoanPage.heading1}
      </div>
      <div className="para text-lightgray">{carLoanPage.para1}</div>
      {isOpen && (
        <Modal
          modal={isOpen}
          setIsOpen={setIsOpen}
          setCarSelected={setCarSelected}
        />
      )}

      {/* bannersection */}
      {carSelected ? (
        <LoanDetails setIsOpen={setIsOpen} />
      ) : (
        <BannerSection
          modal={isOpen}
          setIsOpen={setIsOpen}
          setCarSelected={setCarSelected}
        />
      )}
      {/* section2 */}
      <div className="my-16">
        <div className="mt-14 mb-3 font-medium text-2xl  text-lightgray">
          {carLoanPage.Heading2}
        </div>
        <div className="grid para gap-8">
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
