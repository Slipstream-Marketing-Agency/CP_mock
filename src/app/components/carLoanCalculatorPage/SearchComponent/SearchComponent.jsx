import Image from "next/image";
import { useState } from "react";
export default function SearchComponent({
  options,
  fieldValue,
  placeholder,
  Formik,
  data,
}) {
  console.log(Formik, "Formik");
  const [query, setQuery] = useState("");
  return (
    <div className="m-2">
      <div className="text-xl font-semibold my-2">Choose {fieldValue}</div>
      <div className="flex gap-2">
        {data.brand && (
          <div className="flex bg-gray-300 rounded-full p-2 mb-4">
            <div className=" text-xs">
              {data.brand}
            </div>
            <Image
              src={"/carLoanPage/edit-icon.svg"}
              width={25}
              height={20}
              className="-mt-1 ml-2"
              alt="edit-icon"
            />
          </div>
        )}
        {data.model && (
          <div className="flex bg-gray-300 rounded-full p-2 mb-4">
          <div className=" text-xs">
            {data.model}
          </div>
          <Image
            src={"/carLoanPage/edit-icon.svg"}
            width={25}
            height={20}
            className="-mt-1 ml-2"
            alt="edit-icon"
          />
        </div>        )}
        {data.year && (
          <div className="flex bg-gray-300 rounded-full p-2 mb-4">
          <div className=" text-xs">
            {data.year}
          </div>
          <Image
            src={"/carLoanPage/edit-icon.svg"}
            width={25}
            height={20}
            className="-mt-1 ml-2"
            alt="edit-icon"
          />
        </div>
        )}
        {data.variant && (
          <div className="flex bg-gray-300 rounded-full p-2 mb-4">
          <div className=" text-xs">
            {data.variant}
          </div>
          <Image
            src={"/carLoanPage/edit-icon.svg"}
            width={25}
            height={20}
            className="-mt-1 ml-2"
            alt="edit-icon"
          />
        </div>
        )}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="p-2 border rounded-full w-full mb-4"
        onChange={(e) => setQuery(e.target.value)}
      />
      {fieldValue === "brand" ? (
        <ul className="grid gap-2 grid-cols-12 ">
          {options
            .filter((user) => user.brand.toLowerCase().includes(query))
            .map((user) => (
              <li
                key={user.id}
                className="sm:col-span-2 col-span-3"
                onClick={() => {
                  Formik.setFieldValue(fieldValue, user.brand),
                    Formik.handleSubmit();
                }}
              >
                <div className="">
                  <Image
                    src={user.image}
                    alt="icon-brand"
                    width={70}
                    height={70}
                  />
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <ul className="list">
          {options
            .filter((value) => value.toLowerCase().includes(query))
            .map((value) => (
              <li
                key={value.id}
                className="m-3 opacity-70 font-medium"
                onClick={() => {
                  Formik.setFieldValue(fieldValue, value),
                    Formik.handleSubmit();
                }}
              >
                {value}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
