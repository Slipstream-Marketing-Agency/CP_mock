"use client";
import Image from "next/image";
export default function SelectedCarsDiv({ data }) {
  return (
    <>
      {/* lg screen UI */}
      <div className=" hidden sm:grid gap-4 grid-cols-10">
        {data.map((car) => (
          <div key={car.brand} className="p-4 col-span-5 sm:col-span-2">
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <Image
                  src={"/edit-icon-grey.svg"}
                  alt="edit-icon"
                  width={30}
                  height={30}
                  // onClick={}
                  className="cursor-pointer"
                />
                <div className="text-base">Change Car</div>
              </div>
              <button className="font-semibold text-lg cursor-pointer">
                X
              </button>
            </div>
            <Image
              src={car.image}
              width={250}
              height={250}
              className="mx-auto mb-2"
              alt={`${car.brand} ${car.model}`}
            />
            <div className="text-xs font-bold text-blue-400">{car.brand}</div>
            <div className="text-sm font-semibold text-gray-500">
              {car.model}
            </div>
            <div className="font-bold text-lg leading-10">{car.price}</div>
          </div>
        ))}
      </div>
      {/* // mobile UI */}
      <div className=" sm:hidden grid gap-4 grid-cols-10">
        {data.slice(0,2).map((car) => (
          <div key={car.brand} className=" col-span-5">
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <Image
                  src={"/edit-icon-grey.svg"}
                  alt="edit-icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <div className="text-base">Change Car</div>
              </div>
              <button className="font-semibold text-lg cursor-pointer">
                X
              </button>
            </div>
            <Image
              src={car.image}
              width={250}
              height={250}
              className="mx-auto mb-2"
              alt={`${car.brand} ${car.model}`}
            />
            <div className="text-xs font-bold text-blue-400">{car.brand}</div>
            <div className="text-sm font-semibold text-gray-500">
              {car.model}
            </div>
            <div className="font-bold text-lg leading-10">{car.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
