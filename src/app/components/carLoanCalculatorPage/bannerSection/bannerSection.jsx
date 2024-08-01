import { carLoanPage } from "../../../mocks/labels";
import Image from "next/image";

export default function bannerSection({ setIsOpen }) {
  return (
    <div className="bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-500 my-4 rounded-lg p-6 text-white flex relative">
      <div>
        <div className="text-2xl w-56 my-2 leading-8">
          {carLoanPage.bannerImageSection.heading}
        </div>
        <div className="font-extralight mb-6 w-2/3 opacity-80">
          {carLoanPage.bannerImageSection.para}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="border-solid border-2 rounded-3xl p-2 px-6 my-4"
        >
          {carLoanPage.bannerImageSection.button}
        </button>
      </div>
      <Image
        className="object-contain min-h-0 absolute bottom-0 right-0 hidden md:block"
        src={"/carLoanPage/carImage.png"}
        alt="car-image"
        height={300}
        width={300}
      />
    </div>
  );
}
