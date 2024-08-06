// "use client";
// import SearchComponent from "./SearchComponent";
// import { carData } from "../../../mocks/mock";
// import { useFormik } from "formik";
// import { useState, useEffect } from "react";
// function FormikSearchComponent({ setIsOpen, setCarSelected }) {
//   const [data, setData] = useState({
//     brand: "",
//     brand_icon:"",
//     model: "",
//     year: "",
//     variant: "",
//   });
//   useEffect(() => {
//     // setData((prevData) => ({
//     //   ...prevData,
//     // }));
//     // console.log(data, "data");
//   }, []);

//   // StepOne
//   const StepOne = (props) => {
//     const handleSubmit = (values) => {
//       props.next(values, false);
//     };
//     const validate = (values) => {
//       const errors = {};
//       // if (!values.brand) {
//       //   errors.brand = "brand";
//       // }
//       return errors;
//     };

//     const formik = useFormik({
//       initialValues: {
//         brand: "",
//       },
//       validate,
//       onSubmit: (value) => {
//         handleSubmit(value);
//       },
//     });

//     return (
//       <div>
//         <form onSubmit={formik.handleSubmit}>
//           <SearchComponent
//             options={carData?.chooseBrandModal}
//             fieldValue={"brand"}
//             fieldValue2={"brand_icon"}
//             placeholder={"Search brand"}
//             Formik={formik}
//             data={data}
//             setCurrentStep={props.setCurrentStep}

//           />
//           {formik.errors.brand ? (
//             <div className="text-red-400">{formik.errors.brand}</div>
//           ) : null}
//         </form>
//       </div>
//     );
//   };

//   // StepTwo
//   const StepTwo = (props) => {
//     const handleSubmit = (values) => {
//       props.next(values, false);
//     };

//     const validate = (values) => {
//       const errors = {};
//       // if (!values.model) {
//       //   errors.model = "";
//       // }
//       return errors;
//     };

//     const formik = useFormik({
//       initialValues: {
//         model: "",
//       },
//       validate,
//       onSubmit: (value) => {
//         handleSubmit(value);
//       },
//     });

//     return (
//       <div>
//         <form onSubmit={formik.handleSubmit}>
//           <SearchComponent
//             options={carData?.chooseModal}
//             fieldValue={"model"}
//             placeholder={"Search model"}
//             Formik={formik}
//             data={data}
//             setData={setData}
//             setCurrentStep={props.setCurrentStep}

//           />

//           {formik.errors.model ? (
//             <div className="text-red-400">{formik.errors.model}</div>
//           ) : null}
//         </form>
//       </div>
//     );
//   };

//   // step3
//   const StepThree = (props) => {
//     const handleSubmit = (values) => {
//       props.next(values, false);
//     };
//     const validate = (values) => {
//       const errors = {};
//       // if (!values.year) {
//       //   errors.year = "";
//       // }
//       return errors;
//     };

//     const formik = useFormik({
//       initialValues: {
//         year: "",
//       },
//       validate,
//       onSubmit: (value) => {
//         handleSubmit(value);
//       },
//     });

//     return (
//       <div>
//         <form onSubmit={formik.handleSubmit}>
//           <SearchComponent
//             options={carData?.chooseYear}
//             fieldValue={"year"}
//             placeholder={"Search year"}
//             Formik={formik}
//             data={data}
//             setData={setData}
//             setCurrentStep={props.setCurrentStep}
//           />

//           {formik.errors.year ? (
//             <div className="text-red-400">{formik.errors.year}</div>
//           ) : null}
//         </form>
//       </div>
//     );
//   };
//   // step4
//   const StepFour = (props) => {
//     const handleSubmit = (values) => {
//       props.next(values, true);
//     };

//     const validate = (values) => {
//       const errors = {};
//       // if (!values.variant) {
//       //   errors.variant = "";
//       // }
//       return errors;
//     };

//     const formik = useFormik({
//       initialValues: {
//         variant: "",
//       },
//       validate,
//       onSubmit: (value) => {
//         handleSubmit(value);
//       },
//     });

//     return (
//       <div>
//         <form onSubmit={formik.handleSubmit}>
//           <SearchComponent
//             options={carData?.chooseVariant}
//             fieldValue={"variant"}
//             placeholder={"Search variant"}
//             Formik={formik}
//             data={data}
//             setData={setData}
//             setCurrentStep={props.setCurrentStep}
//           />
//           {formik.errors.variant ? (
//             <div className="text-red-400">{formik.errors.variant}</div>
//           ) : null}
//         </form>
//       </div>
//     );
//   };

//   const makeRequest = (formData) => {
//     console.log(formData, "Form submitted");
//   };

//   const handleNextStep = (newData, final) => {
//     setData((prev) => ({ ...prev, ...newData }));
//     if (final) {
//       makeRequest(data);
//       setIsOpen(false);
//       setCarSelected(true);
//     } else {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevStep = (newData) => {
//     setData((prev) => ({ ...prev, ...newData }));
//     setCurrentStep((prev) => prev - 1);
//   };

//   const [currentStep, setCurrentStep] = useState(0);
//   const steps = [
//     <StepOne next={handleNextStep} data={data} setCurrentStep={setCurrentStep}/>,
//     <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} setCurrentStep={setCurrentStep} />,
//     <StepThree next={handleNextStep} prev={handlePrevStep} data={data} setCurrentStep={setCurrentStep} />,
//     <StepFour next={handleNextStep} prev={handlePrevStep} data={data} setCurrentStep={setCurrentStep}/>,
//   ];

//   return (
//     <div className="rounded-xl">
//       <div className="p-0">{steps[currentStep]}</div>
//     </div>
//   );
// }

// export default FormikSearchComponent;

// optmised code below

"use client";
import SearchComponent from "./SearchComponent";
import { carData } from "../../../mocks/mock";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

const stepsConfig = [
  {
    field: "brand",
    options: carData?.chooseBrandModal,
    placeholder: "Search brand",
    additionalFields: { brand_icon: "" },
  },
  {
    field: "model",
    options: carData?.chooseModal,
    placeholder: "Search model",
    additionalFields: {},
  },
  {
    field: "year",
    options: carData?.chooseYear,
    placeholder: "Search year",
    additionalFields: {},
  },
  {
    field: "variant",
    options: carData?.chooseVariant,
    placeholder: "Search variant",
    additionalFields: {},
  },
];

function FormikSearchComponent({ setIsOpen, setCarSelected }) {
  const [data, setData] = useState({
    brand: "",
    brand_icon: "",
    model: "",
    year: "",
    variant: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log(formData, "Form submitted");
  };

  const handleNextStep = (newData, final) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(data);
      setIsOpen(false);
      setCarSelected(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const configureFormik = ({ field, additionalFields, handleSubmit }) => {
    const validate = (values) => {
      const errors = {};
      return errors;
    };

    return useFormik({
      initialValues: { [field]: "", ...additionalFields },
      validate,
      onSubmit: (value) => handleSubmit(value),
    });
  };

  const renderStep = ({ field, options, placeholder, additionalFields }, idx) => {
    const isFinalStep = idx === stepsConfig.length - 1;
    const formik = configureFormik({
      field,
      additionalFields,
      handleSubmit: (values) => handleNextStep(values, isFinalStep),
    });

    return (
      <div key={field}>
        <form onSubmit={formik.handleSubmit}>
          <SearchComponent
            options={options}
            fieldValue={field}
            placeholder={placeholder}
            Formik={formik}
            data={data}
            setData={setData}
            setCurrentStep={setCurrentStep}
          />
          {formik.errors[field] && <div className="text-red-400">{formik.errors[field]}</div>}
        </form>
      </div>
    );
  };

  return (
    <div className="rounded-xl">
      <div className="p-0">{renderStep(stepsConfig[currentStep], currentStep)}</div>
    </div>
  );
}

export default FormikSearchComponent;
