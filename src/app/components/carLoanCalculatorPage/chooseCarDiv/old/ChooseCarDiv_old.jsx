import Image from "next/image";
import { carLoanPage } from "../../../../mocks/labels";
import { carData } from "../../../../mocks/mock";
// import ActiveSlider from "./ActiveSlider";
// import ActiveSlider2 from "./ActiveSlider2";
import ActiveSlider3 from "./ActiveSlider3";
import ActiveSlider4 from "../chooseCarDiv";
export default function ChooseCarDiv() {
  return (
    <ActiveSlider4 />
    // <div className=" my-6">
    //   <div className=" text-blue-600 font-bold text-sm uppercase">
    //     {carLoanPage.chooseCarSection.headingSmall}
    //   </div>
    //   <div className="font-semibold font-medium text-2xl leading-9 mb-6">
    //     {carLoanPage.chooseCarSection.heading}
    //   </div>
    //   <div className=" grid gap-4 md:grid-cols-12 ">

    //     {carData.chooseCar.map((item)=>(
    //     <div key={item.brand} className="md:col-span-4 border rounded-xl px-2 py-4">
    //     <div className="">
    //       <Image
    //         src={item.image}
    //         width={250}
    //         height={250}
    //         className="mx-auto mb-2"
    //       />
    //       <div className="text-blue-500 text-xs font-semibold">{item.brand}</div>
    //       <div className="text-md font-semibold text-gray-600">
    //         {item.model}
    //       </div>
    //       <div className="font-bold xl:text-lg">{item.price}</div>

    //       {/* details div */}
    //       <div className="flex justify-between p-2 bg-slate-100 rounded-md my-2 text-gray-500 text-xs">
    //         <div className="">
    //           <div>MILEAGE</div>
    //           <div className="font-bold">{item.mileage}Litre</div>
    //         </div>
    //         <div className=" ">
    //           <div>TRANSMISION</div>
    //           <div className="font-bold">{item.transmission}</div>
    //         </div>
    //         <div className="col-span-4">
    //           <div>SEATS</div>
    //           <div className="font-bold">{item.seats}</div>
    //         </div>
    //       </div>

    //       {/* EMI div */}
    //       <div className="grid gap-1 grid-cols-12 rounded-md">
    //         <div className="col-span-6 p-2 text-xs float-left">
    //           <div className="text-xs opacity-70">EMI Starting from</div>
    //           <div className="text-sm font-bold">{item.emi}*</div>
    //         </div>
    //         <div className="col-span-6 text-xs ">
    //           <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 float-right">
    //             Calculate EMI
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //     ))}

    //   </div>
    // </div>
  );
}
