"use client";
import Image from "next/image";
import Sidebar1 from "../../components/carLoanCalculatorPage/sidebar1/Sidebar1";
import Sidebar2 from "../../components/carLoanCalculatorPage/sidebar2/Sidebar2";
import MainSection from "../../components/carLoanCalculatorPage/mainSection/mainSection";
export default function CarLoanCalculatorPage() {
  return (
    <section className="font-gilroy">
      <hr />
      <div className="grid sm:grid-cols-12 py-2 px-6 sm:px-24 md:px-16  bg-slate-100">
        <div className="sm:col-span-12 flex">
          <Image
            src={"/carLoanPage/home-icon.svg"}
            alt="home-icon"
            width={30}
            height={30}
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
      <div className="grid sm:grid-cols-12 gap-8 py-8 px-6 sm:px-24 md:px-14  lg:px-40">
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
