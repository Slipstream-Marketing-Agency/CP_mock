"use client";
import Image from "next/image";
import Sidebar1 from "../../components/carLoanCalculatorPage/sidebar1/Sidebar1";
import Sidebar2 from "../../components/carLoanCalculatorPage/sidebar2/Sidebar2";
import MainSection from "../../components/carLoanCalculatorPage/mainSection/mainSection";
import Header from "../../components/common/header/Header";
export default function CarLoanCalculatorPage() {
  return (
    <section className="">
      {/* <Header /> */}
      <hr />
      <div className="grid sm:grid-cols-12 py-2  px-6 sm:px-24 md:px-16  lg:p-50">
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
          <div className=" font-semibold">Car Loan Calculator</div>
        </div>
      </div>
      <hr />
      <div className="grid sm:grid-cols-12 my-4 gap-16 px-6 sm:px-24 md:px-16  lg:p-50">
        <div className="sm:col-span-9">
          <MainSection />
        </div>
        <div className=" h-1/2 mt-14 sm:col-span-3  sm:block hidden">
          <Sidebar1 />
          <Sidebar2 />
          <Sidebar1 />
        </div>
      </div>
    </section>
  );
}
