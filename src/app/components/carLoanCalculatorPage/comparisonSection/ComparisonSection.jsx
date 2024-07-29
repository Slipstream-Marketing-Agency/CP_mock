import Image from "next/image";
import { carData } from "../../../mocks/mock";
export default function ComparisonSection() {
  return (
    <div className="my-6">
      <div className=" text-blue-600 font-bold text-sm uppercase">
        WHAT'S THE BEST ?
      </div>
      <div className="font-semibold font-medium text-2xl leading-9">
        Popular Car Comparison
      </div>
      <div className="m-4 grid gap-4 sm:grid-cols-12">
        {carData.carComparison.map((item) => (
          <div className="sm:col-span-6 rounded-xl border  px-3 py-4">
            <div className=" grid gap-6  sm:grid-cols-12 ">
              <div className="sm:col-span-5 m-2">
                <div className="">
                  <Image
                    src={item.image1}
                    width={250}
                    height={250}
                    className="mx-auto mb-2"
                  />
                  <div className="text-blue-500 text-xs font-semibold">
                    {item.brand1}
                  </div>
                  <div className="text-md text-gray-600">
                    {item.model1}
                  </div>
                  <div className="font-bold text-md sm:hidden">{item.price1}</div>
                </div>
              </div>

              <div className="sm:col-span-1 border-r h-1/2  my-4 sm:block hidden  ">
                <div className=" bg-blue-500 h-6 w-6 p-1 my-7  rounded-xl text-xs text-white ">
                  Vs
                </div>
              </div>

              <div className="md:hidden sm:col-span-12 border-b-2 mx-2">
                <div className=" bg-blue-500 h-6 w-6 mx-auto -my-3 p-1 rounded-xl text-xs text-white">
                  Vs
                </div>
              </div>

              <div className="sm:col-span-5 m-2">
                <div>
                  <Image
                    src={item.image2}
                    width={250}
                    height={250}
                    className="mx-auto mb-2 "
                  />
                  <div className="text-blue-500 text-xs font-semibold">
                    {item.brand2}
                  </div>
                  <div className="text-md  text-gray-600">
                    {item.model2}
                  </div>
                  <div className="font-bold text-md sm:hidden">{item.price2}</div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-12 md:grid hidden mx-2 mb-4">
              <div className="sm:col-span-6 text-sm font-semibold">{item.price1}</div>
              <div className="sm:col-span-6 text-sm font-semibold mx-4">{item.price2}</div>
            </div>

            <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 py-2 w-full">
              Compare Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
