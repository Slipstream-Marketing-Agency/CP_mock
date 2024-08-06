// import Image from "next/image";
// import { useState } from "react";
// import SearchIcon from "@mui/icons-material/SearchOutlined";
// export default function SearchComponent({
//   options,
//   fieldValue,
//   fieldValue2,
//   placeholder,
//   Formik,
//   data,
//   setData,
//   setCurrentStep,
// }) {
//   const [query, setQuery] = useState("");
//   const handleEdit = (step) => {
//     setCurrentStep(step);
//     // setData(prevData => ({
//     //   ...prevData,
//     //   // brand:"",
//     //   // brand_icon:"",
//     //   model: "",
//     //   year: "",
//     //   variant: "",
//     // }));
//   };
//   console.log(data, "data");
//   return (
//     <div className="m-2">
//       <div className="text-2xl font-semibold my-2 capitalize">
//         Choose {fieldValue}
//       </div>
//       <div className="flex gap-2">
//         {data.brand && (
//           <div className="flex bg-lightblue rounded-full p-2 mb-4 items-center gap-1">
//             <Image
//               src={data.brand_icon}
//               alt="brand-icon"
//               height={20}
//               width={20}
//               className=""
//             />
//             <div className=" capitalize text-xs">{data.brand}</div>
//             <Image
//               src={"/carLoanPage/edit-icon.svg"}
//               width={25}
//               height={20}
//               className=" cursor-pointer"
//               alt="edit-icon"
//               onClick={() => {
//                 setData((prevData) => ({
//                   ...prevData,
//                   brand: "",
//                   brand_icon: "",
//                   model: "",
//                   year: "",
//                   variant: "",
//                 }));
//                 setCurrentStep(0);
//               }}
//             />
//           </div>
//         )}
//         {data.model && (
//           <div className="flex bg-lightblue rounded-full p-2 mb-4 items-center gap-1">
//             <div className=" ml-2 text-xs">{data.model}</div>
//             <Image
//               src={"/carLoanPage/edit-icon.svg"}
//               width={25}
//               height={20}
//               className=" cursor-pointer"
//               alt="edit-icon"
//               onClick={() => {
//                 setData((prevData) => ({
//                   ...prevData,
//                   model: "",
//                   year: "",
//                   variant: "",
//                 }));
//                 setCurrentStep(1);
//               }}
//             />
//           </div>
//         )}
//         {data.year && (
//           <div className="flex bg-lightblue rounded-full p-2 mb-4 items-center gap-1">
//             <div className=" ml-2 text-xs">{data.year}</div>
//             <Image
//               src={"/carLoanPage/edit-icon.svg"}
//               width={25}
//               height={20}
//               className="cursor-pointer"
//               alt="edit-icon"
//               onClick={() => {
//                 setData((prevData) => ({
//                   ...prevData,
//                   year: "",
//                   variant: "",
//                 }));
//                 setCurrentStep(2);
//               }}
//             />
//           </div>
//         )}
//         {data.variant && (
//           <div className="flex bg-lightblue rounded-full p-2 mb-4 items-center gap-1">
//             <div className="ml-2 text-xs">{data.variant}</div>
//             <Image
//               src={"/carLoanPage/edit-icon.svg"}
//               width={25}
//               height={20}
//               className="cursor-pointer"
//               alt="edit-icon"
//               // onClick={() => handleEdit(3)}
//             />
//           </div>
//         )}
//       </div>

//       <div className="mt-1 relative rounded-md shadow-sm">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <SearchIcon />
//         </div>
//         <input
//           type="text"
//           onChange={(e) => setQuery(e.target.value)}
//           className="focus:ring-blue-500 focus:border-blue-500 block p-2 border rounded-full w-full mb-4 sm:text-sm border-gray-300 px-10"
//           placeholder={placeholder}
//         />
//       </div>

//       <div className="mt-4 h-96 overflow-y-auto rounded-md custom_scrollbar">
//         {fieldValue === "brand" ? (
//           <ul className="grid gap-2 grid-cols-12">
//             {options
//               .filter((user) => user.brand.toLowerCase().includes(query))
//               .map((user) => (
//                 <li
//                   key={user.id}
//                   className="sm:col-span-2 col-span-3 flex justify-center items-center"
//                   onClick={() => {
//                     Formik.setFieldValue(fieldValue, user.brand),
//                       Formik.setFieldValue(fieldValue2, user.image),
//                       Formik.handleSubmit();
//                   }}
//                 >
//                   <div className="">
//                     <Image
//                       src={user.image}
//                       alt="icon-brand"
//                       width={70}
//                       height={70}
//                       className="cursor-pointer"
//                     />
//                     <div className="capitalize text-center my-1 text-xs">
//                       {user.brand}
//                     </div>
//                   </div>
//                 </li>
//               ))}
//           </ul>
//         ) : (
//           <ul className="list">
//             {options
//               .filter((value) => value.toLowerCase().includes(query))
//               .map((value) => (
//                 <li
//                   key={value.id}
//                   className="m-3 opacity-70 font-medium cursor-pointer"
//                   onClick={() => {
//                     Formik.setFieldValue(fieldValue, value),
//                       Formik.handleSubmit();
//                   }}
//                 >
//                   {value}
//                 </li>
//               ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// optimised code below

import Image from "next/image";
import { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/SearchOutlined";

export default function SearchComponent({
  options,
  fieldValue,
  placeholder,
  Formik,
  data,
  setData,
  setCurrentStep,
}) {
  const [query, setQuery] = useState("");

  const handleEdit = useCallback(
    (step, updatedFields) => {
      setData((prevData) => ({
        ...prevData,
        ...updatedFields,
      }));
      setCurrentStep(step);
    },
    [setCurrentStep, setData]
  );

  const filteredOptions = options.filter((item) =>
    fieldValue === "brand"
      ? item.brand.toLowerCase().includes(query.toLowerCase())
      : item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="m-2">
      <div className="text-xl my-2 capitalize">
        Choose {fieldValue}
      </div>
      <div className="flex gap-2">
        {data.brand && (
          <DataBadge
            iconSrc={data.brand_icon}
            label={data.brand}
            onClick={() =>
              handleEdit(0, {
                brand: "",
                brand_icon: "",
                model: "",
                year: "",
                variant: "",
              })
            }
          />
        )}
        {data.model && (
          <DataBadge
            label={data.model}
            onClick={() =>
              handleEdit(1, {
                model: "",
                year: "",
                variant: "",
              })
            }
          />
        )}
        {data.year && (
          <DataBadge
            label={data.year}
            onClick={() =>
              handleEdit(2, {
                year: "",
                variant: "",
              })
            }
          />
        )}
        {data.variant && <DataBadge label={data.variant} />}
      </div>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:ring-blue-500 focus:border-blue-500 block p-2 border rounded-full w-full mb-4 sm:text-sm border-gray-300 px-10"
          placeholder={placeholder}
        />
      </div>

      <div className="mt-4 h-96 overflow-y-auto rounded-md custom_scrollbar">
        <ul
          className={
            fieldValue === "brand" ? "grid gap-2 grid-cols-12" : "list"
          }
        >
          {filteredOptions.map((item,index) => (
            <li
              key={index}
              className={
                fieldValue === "brand"
                  ? "sm:col-span-2 col-span-3 flex justify-center items-center"
                  : "m-3 opacity-70 font-medium cursor-pointer"
              }
              onClick={() => {
                Formik.setFieldValue(
                  fieldValue,
                  fieldValue === "brand" ? item.brand : item
                );
                if (fieldValue === "brand") {
                  Formik.setFieldValue("brand_icon", item.image);
                }
                Formik.handleSubmit();
              }}
            >
              {fieldValue === "brand" ? (
                <div>
                  <Image
                    src={item.image}
                    alt="icon-brand"
                    width={70}
                    height={70}
                    className="cursor-pointer"
                  />
                  <div className="capitalize text-center my-1 text-xs">
                    {item.brand}
                  </div>
                </div>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DataBadge = ({ iconSrc, label, onClick }) => (
  <div className="flex bg-lightblue rounded-full p-2 mb-4 items-center gap-1">
    {iconSrc && <Image src={iconSrc} alt="brand-icon" height={20} width={20} />}
    <div className="capitalize text-xs">{label}</div>
    <Image
      src={"/carLoanPage/edit-icon.svg"}
      width={25}
      height={20}
      className="cursor-pointer"
      alt="edit-icon"
      onClick={onClick}
    />
  </div>
);
