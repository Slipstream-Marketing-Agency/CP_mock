"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "../../carLoanCalculatorPage/modal/Modal";
import CloseIcon from '@mui/icons-material/Close';
export default function SelectedCarsDiv({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal modal={isOpen} setIsOpen={setIsOpen} />
      {/* lg screen UI */}
      <div className=" hidden sm:grid gap-4 grid-cols-8">
        {data.map((car) => (
          <div key={car.brand} className="p-4 col-span-5 sm:col-span-2">
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <Image
                  src={"/edit-icon-grey.svg"}
                  alt="edit-icon"
                  width={30}
                  height={30}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer"
                />
                <div className="text-base">Change Car</div>
              </div>
              <CloseIcon className="cursor-pointer"/>
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
        <div className="p-4 col-span-2 space-y-1">
          <div className="text-xs text-gray-400  leading-9">Similar Cars</div>
          <div>8 Series Coupe M850i Heritage </div>
          <div>Toyota Rush</div>
          <div>Chevorlet Groove</div>
          <div className="text-lg  flex mt-4  cursor-pointer">
            <Image
              src={"/add-more-icon.svg"}
              alt="add-more-icon"
              width={20}
              height={20}
            />
            <span className="text-gray-400 font-thin mx-2">Add more to Compare</span>
          </div>
        </div>
      </div>
      {/* // mobile UI */}
      <div className=" sm:hidden grid gap-4 grid-cols-10">
        {data.slice(0, 2).map((car) => (
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
