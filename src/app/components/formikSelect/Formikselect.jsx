"use client";
// import { useFormik } from "formik";
// // import Select from "react-select";
// // import CustomSelect from "./components/insuranceQuote/Customselect";
// import SelectComponent from "../selectComponent/selectComponent";
// import { carData } from "../../mocks/mock";
// export default function Formikselect() {
//   const validate = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = "Email is required";
//     }
//     if (!values.model) {
//       errors.model = "Required field";
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       model: "",
//     },
//     validate,
//     onSubmit: (value) => {
//       console.log(value);
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="email">Email address</label>
//         <input
//           name="email"
//           id="email"
//           type="email"
//           onChange={formik.handleChange}
//           className="p-2 bg-red-500"
//           value={formik.values.email}
//         />

//         {formik.errors.email ? (
//           <div className="text-red-300">{formik.errors.email}</div>
//         ) : null}

//         <label htmlFor="Model">Model</label>
//         <SelectComponent
//           options={carData?.optionsBrand}
//           value={formik.values.model}
//           onChange={(value) => formik.setFieldValue("model", value.value)}
//         />
//         {formik.errors.model ? (
//           <div className="text-red-400">{formik.errors.model}</div>
//         ) : null}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
import Select from "react-select";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Link from "next/link";

function FormikSelect({setIsOpen, setCarSelected}) {
  const [selectedOptionBrand, setSelectedOptionBrand] = useState("");
  const [selectedOptionYear, setSelectedOptionYear] = useState("");

  const [data, setData] = useState({
    car_year: "",
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      car_year: selectedOptionYear,
      car_brand: selectedOptionBrand,
    }));
    if (selectedOptionBrand !== "") setErrorOptionBrand(false);
    if (selectedOptionYear !== "") setErrorOptionYear(false);
  }, [selectedOptionBrand, selectedOptionYear]);

  // Step1ValidationSchema
  const stepOneValidationSchema = Yup.object({
    // first_car: Yup.string().required("This is a required field"),
  });

  // StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      let hasError = false;
      // if (selectedOptionYear === "") {
      //   setErrorOptionYear(true);
      //   hasError = true;
      // }
      // if (selectedOptionBrand === "") {
      //   setErrorOptionBrand(true);
      //   hasError = true;
      // }
      if (!hasError) {
        props.next(values, false);
      }
    };

    return (
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="my-6 p-2 text-sm">
            <div>step1</div>
            <button
              className="lg:w-auto w-full py-4 px-12 text-xs bg-blue-700 rounded-3xl sm:float-right text-white"
              type="submit"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  // step2 validation schema
  const stepTwoValidationSchema = Yup.object({});

  // StepTwo
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="my-6 p-2">
            <div>inputstep2</div>
            <div className="m-4 gap-4 sm:grid-cols-12">
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  onClick={() => props.prev(formikProps.values)}
                  className="lg:w-auto md:w-auto w-full py-4 px-16 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-left text-white"
                  type="button"
                >
                  Back
                </button>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  className="lg:w-auto md:w-auto w-full py-4 px-12 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-right text-white"
                  type="submit"
                >
                  continue
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  // step3
  const StepThree = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="my-6 p-2">
            <div>inputstep3</div>
            <div className="m-4 gap-4 sm:grid-cols-12">
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  onClick={() => props.prev(formikProps.values)}
                  className="lg:w-auto md:w-auto w-full py-4 px-16 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-left text-white"
                  type="button"
                >
                  Back
                </button>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  className="lg:w-auto md:w-auto w-full py-4 px-12 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-right text-white"
                  type="submit"
                >
                  continue
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };
  // step4
  const StepFour = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
    };

    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="my-6 p-2">
            <div>inputstep4</div>
            <div className="m-4 gap-4 sm:grid-cols-12">
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  onClick={() => props.prev(formikProps.values)}
                  className="lg:w-auto md:w-auto w-full py-4 px-16 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-left text-white"
                  type="button"
                >
                  Back
                </button>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <button
                  className="lg:w-auto md:w-auto w-full py-4 px-12 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-right text-white"
                  type="submit"
                >
                  close Modal
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  const makeRequest = (formData) => {
    console.log("show page");
    console.log(formData, "Form submitted");
  };

  const handleNextStep = (newData, final) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      setIsOpen(false);
      setCarSelected(true);
      makeRequest(newData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <div className="border border-2 grey-500 rounded-xl">
      <div className="p-6">
        <div className="items-center justify-between">
          <div className="text-xl text-center">Get Your Insurance Quote</div>
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
}

export default FormikSelect;
