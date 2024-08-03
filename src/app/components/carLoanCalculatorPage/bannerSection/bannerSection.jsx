import { carLoanPage } from "../../../mocks/labels";
import Image from "next/image";

export default function bannerSection({ setIsOpen }) {
  return (
    <div className="bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-700 my-4  mt-8 rounded-2xl p-10 text-white flex relative overflow-hidden custom-gradient">
      <div>
        <div className="text-4xl sm:w-1/2 leading-snug leading-snugl">
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
        className="object-contain min-h-0 absolute bottom-0 right-0 hidden md:block "
        src={"/carLoanPage/carImage.png"}
        alt="car-image"
        height={380}
        width={380}
      />
    </div>
  );
}
