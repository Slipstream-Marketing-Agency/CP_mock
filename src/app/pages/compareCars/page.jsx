import Image from "next/image";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/compareCarsPage/sidebar/Sidebar";
import SelectedCarsDiv from "../../components/compareCarsPage/selectedCarsDiv/SelectedCarsDiv";
import DetailsDiv from "../../components/compareCarsPage/detailsDiv/DetailsDiv";
import ComparisonSection from "../../components/common/comparisonSection/ComparisonSection";
import DimensionSection from "../../components/carLoanCalculatorPage/dimensionsSection/DimensionSection";
import FrequentlySearched from "../../components/carLoanCalculatorPage/frequentlySearched/FrequentlySearched";
import { carData } from "../../mocks/mock";
function compareCars() {
  return (
    <>
      {/* <Header /> */}
      <section className="">
        <section>
          <hr />
          <div className="grid sm:grid-cols-12 py-2  px-6 sm:px-24 md:px-16  lg:px-52">
            <div className="sm:col-span-12 flex">
              <Image
                src={"/carLoanPage/home-icon.svg"}
                alt="home-icon"
                width={25}
                height={25}
                className="cursor-pointer"
              />
              <Image
                src={"/carLoanPage/arrow-right.svg"}
                alt="home-icon"
                width={8}
                height={8}
                className="mx-3"
              />
              <div className=" font-semibold">Compare Cars</div>
            </div>
          </div>
          <hr />
        </section>

        <section className="grid gap-6 sm:grid-cols-10 px-6 sm:px-24 md:px-16  lg:px-52 mt-8">
          <div className="sm:col-span-2">
            <Sidebar />
          </div>
          <div className="sm:col-span-8">
            <SelectedCarsDiv
              data={carData.compareCarsDetails.BasicInformation.details}
            />
          </div>
        </section>
        <section className="">
          <DetailsDiv
            heading={"Basic Information"}
            data={carData.compareCarsDetails.BasicInformation}
          />
          <DetailsDiv
            heading={"Engine & Transmssion Details"}
            data={carData.compareCarsDetails.Engine_and_Transmssion_Details}
          />
          <DetailsDiv
            heading={"Fuel Efficiency"}
            data={carData.compareCarsDetails.FuelEfficiency}
          />
          <DetailsDiv
            heading={"Performance"}
            data={carData.compareCarsDetails.performance}
          />
          <DetailsDiv
            heading={"Safety"}
            data={carData.compareCarsDetails.Safety}
          />
          <DetailsDiv
            heading={"Dimension"}
            data={carData.compareCarsDetails.Dimension}
          />
          <DetailsDiv
            heading={"Interior Details"}
            data={carData.compareCarsDetails.Interior_Details}
          />
        </section>
        <section className="sm:px-52 px-6 my-4">
          <DimensionSection />
        </section>
        <section className="sm:px-52 px-6 my-4">
          <ComparisonSection />
        </section>
        <section className="sm:px-52 px-6 my-4">
          <FrequentlySearched />
        </section>
        <section className="sm:px-52 px-6 my-4">
          <DimensionSection />
        </section>
      </section>
    </>
  );
}

export default compareCars;
