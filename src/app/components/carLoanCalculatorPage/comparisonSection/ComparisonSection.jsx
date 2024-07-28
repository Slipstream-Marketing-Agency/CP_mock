import Image from "next/image";

export default function ComparisonSection() {
  return (
    <div className="my-6">
      <div className=" text-blue-600 font-bold text-sm uppercase">
        WHAT'S THE BEST ?
      </div>
      <div className="font-semibold font-medium text-xl leading-9">
        Popular Car Comparison
      </div>
      <div className="m-4 grid gap-4 sm:grid-cols-12">
        {/* will do mapping from mock to just have eliminate div2 */}
        {/* div21 */}
        <div className="sm:col-span-6 rounded-xl border-2  px-2 py-4">
          <div className=" grid gap-1  sm:grid-cols-12 ">
            <div className="sm:col-span-5 m-2">
              <div className="">
                <Image
                  src="/car-image2.png"
                  width={250}
                  height={250}
                  className="mx-auto mb-2"
                />
                <div className="text-blue-500 text-xs font-semibold">VOLVO</div>
                <div className="text-md font-semibold text-gray-600">Volvo XC40</div>
                <div className="font-bold xl:text-lg">AED 185,850 - 222,900</div>
              </div>
            </div>
            <div className="sm:col-span-1 border-r-2 sm:block hidden mx-4">
              <div className=" bg-blue-500 h-6 w-6 p-1 my-8 rounded-xl text-xs text-white">
                Vs
              </div>
            </div>

            <div className="lg:hidden sm:col-span-12 border-b-2 mx-2">
              <div className=" bg-blue-500 h-6 w-6 mx-auto -my-2 p-1 rounded-xl text-xs text-white">
                Vs
              </div>
            </div>

            <div className="sm:col-span-5 m-2">
              <div>
                <Image
                  src="/car-image2.png"
                  width={250}
                  height={250}
                  className="mx-auto mb-2"
                />
                <div className="text-blue-500 text-xs font-semibold">BMW</div>
                <div className="text-md font-semibold text-gray-600">1 Series</div>
                <div className="font-bold xl:text-lg b-2">AED 185,850</div>
              </div>
            </div>
          </div>
          <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 w-full">
          Compare Now
          </button>
        </div>
        {/* div2 */}
        <div className="sm:col-span-6 rounded-xl border-2  px-2 py-4">
          <div className=" grid gap-1  sm:grid-cols-12 ">
            <div className="sm:col-span-5 m-2">
              <div className="">
                <Image
                  src="/car-image2.png"
                  width={250}
                  height={250}
                  className="mx-auto mb-2"
                />
                <div className="text-blue-500 text-xs font-semibold">VOLVO</div>
                <div className="text-md font-semibold text-gray-600">Volvo XC40</div>
                <div className="font-bold xl:text-lg">AED 185,850 - 222,900</div>
              </div>
            </div>
            <div className="sm:col-span-1 border-r-2 sm:block hidden mx-4">
              <div className=" bg-blue-500 h-6 w-6 p-1 my-8 rounded-xl text-xs text-white">
                Vs
              </div>
            </div>

            <div className="lg:hidden sm:col-span-12 border-b-2 mx-2">
              <div className=" bg-blue-500 h-6 w-6 mx-auto -my-2 p-1 rounded-xl text-xs text-white">
                Vs
              </div>
            </div>

            <div className="sm:col-span-5 m-2">
              <div>
                <Image
                  src="/car-image2.png"
                  width={250}
                  height={250}
                  className="mx-auto mb-2"
                />
                <div className="text-blue-500 text-xs font-semibold">BMW</div>
                <div className="text-md font-semibold text-gray-600">1 Series</div>
                <div className="font-bold xl:text-lg b-2">AED 185,850</div>
              </div>
            </div>
          </div>
          <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 p-3 w-full">
          Compare Now
          </button>
        </div>
      </div>
    </div>
  );
}
