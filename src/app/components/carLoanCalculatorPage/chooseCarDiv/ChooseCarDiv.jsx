import Image from "next/image";
import { carLoanPage } from "../../../mocks/labels";
export default function ChooseCarDiv() {
  return (
    <div className=" my-6">
      <div className=" text-blue-600 font-bold text-sm uppercase">
        {carLoanPage.chooseCarSection.headingSmall}
      </div>
      <div className="font-semibold font-medium text-xl leading-9">
        {carLoanPage.chooseCarSection.heading}
      </div>
      <div className=" grid gap-4 md:grid-cols-12 ">
        {/* will do mapping from mock to just have eliminate div2,div3 */}
        {/* div1 */}
        <div className="md:col-span-4 border-2 rounded-xl px-2 py-4">
          <div className="">
            <Image
              src="/car-image2.png"
              width={250}
              height={250}
              className="mx-auto mb-2"
            />
            <div className="text-blue-500 text-xs font-semibold">VOLVO</div>
            <div className="text-md font-semibold text-gray-600">
              Volvo XC40
            </div>
            <div className="font-bold xl:text-lg">AED 185,850* - 222,900*</div>

            {/* details div */}
            <div className="flex justify-between p-2 bg-slate-200 rounded-md my-2 text-gray-500 text-xs xl:text-sm ">
              <div className="">
                <div>MILEAGE</div>
                <div className="font-bold">90 Litre</div>
              </div>
              <div className=" ">
                <div>TRANSMISION</div>
                <div className="font-bold">Manual</div>
              </div>
              <div className="col-span-4">
                <div>SEATS</div>
                <div className="font-bold">5 Seater</div>
              </div>
            </div>

            {/* EMI div */}
            <div className="grid gap-1 grid-cols-12 rounded-md">
              <div className="col-span-6 p-2 text-xs float-left">
                <div className="text-xs opacity-70">EMI Starting from</div>
                <div className="text-sm font-bold">AED 3,196*</div>
              </div>
              <div className="col-span-6 text-xs ">
                <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 float-right">
                  Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="md:col-span-4 border-2 rounded-xl px-2 py-4">
          <div className="">
            <Image
              src="/car-image2.png"
              width={250}
              height={250}
              className="mx-auto mb-2"
            />
            <div className="text-blue-500 text-xs font-semibold">VOLVO</div>
            <div className="text-md font-semibold text-gray-600">
              Volvo XC40
            </div>
            <div className="font-bold xl:text-lg">AED 185,850* - 222,900*</div>

            {/* details div */}
            <div className="flex justify-between p-2 bg-slate-200 rounded-md my-2 text-gray-500 text-xs xl:text-sm ">
              <div className="">
                <div>MILEAGE</div>
                <div className="font-bold">90 Litre</div>
              </div>
              <div className=" ">
                <div>TRANSMISION</div>
                <div className="font-bold">Manual</div>
              </div>
              <div className="col-span-4">
                <div>SEATS</div>
                <div className="font-bold">5 Seater</div>
              </div>
            </div>

            {/* EMI div */}
            <div className="grid gap-1 grid-cols-12 rounded-md">
              <div className="col-span-6 p-2 text-xs float-left">
                <div className="text-xs opacity-70">EMI Starting from</div>
                <div className="text-sm font-bold">AED 3,196*</div>
              </div>
              <div className="col-span-6 text-xs ">
                <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 float-right">
                  Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div className="md:col-span-4 border-2 rounded-xl px-2 py-4">
          <div className="">
            <Image
              src="/car-image2.png"
              width={250}
              height={250}
              className="mx-auto mb-2"
            />
            <div className="text-blue-500 text-xs font-semibold">VOLVO</div>
            <div className="text-md font-semibold text-gray-600">
              Volvo XC40
            </div>
            <div className="font-bold xl:text-lg">AED 185,850* - 222,900*</div>

            {/* details div */}
            <div className="flex justify-between p-2 bg-slate-200 rounded-md my-2 text-gray-500 text-xs xl:text-sm ">
              <div className="">
                <div>MILEAGE</div>
                <div className="font-bold">90 Litre</div>
              </div>
              <div className=" ">
                <div>TRANSMISION</div>
                <div className="font-bold">Manual</div>
              </div>
              <div className="col-span-4">
                <div>SEATS</div>
                <div className="font-bold">5 Seater</div>
              </div>
            </div>

            {/* EMI div */}
            <div className="grid gap-1 grid-cols-12 rounded-md">
              <div className="col-span-6 p-2 text-xs float-left">
                <div className="text-xs opacity-70">EMI Starting from</div>
                <div className="text-sm font-bold">AED 3,196*</div>
              </div>
              <div className="col-span-6 text-xs ">
                <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 float-right">
                  Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
