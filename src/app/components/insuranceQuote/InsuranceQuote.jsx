"use client";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Stepper from "../3stepper/Stepper";
import { carData } from "@/app/mocks/mock";
import Modal from "../modal/Modal";
// import HorizontalLinearStepper from "../stepper/Stepper";

function InsuranceQuote() {
  // const [brands, setBrand] = useState(carData.Brands);
  // const [selectedCarbrand, setSelectedCarbrand] = useState(carData.Brands);
  const [model, setModel] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //to select model depending on brand
  const selectModel = (selectedBrand) => {
    setModel(carData.carModels[selectedBrand]);
  };
  const datePickerId = new Date().toISOString().split("T")[0];

  // Step1ValidationSchema
  const stepOneValidationSchema = Yup.object({
    car_year: Yup.string().required().label("Car Year"),
    model: Yup.string().required().label("Model"),
    first_car: Yup.string().required().label("This"),
    brand_new_car: Yup.string().required().label("This"),
    car_first_registered: Yup.string().required().label("This"),
    gcc_spec: Yup.string().required().label("This"),
    agency_repair: Yup.string().required().label("This"),
    car_brand: Yup.string().required().label("This"),
    city: Yup.string().required().label("This"),
    variant: Yup.string().required().label("This"),
    is_fully_comprehensive: Yup.string().required().label("This"),
  });
  //StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    return (
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className=" my-6 p-2 text-sm">
            <Stepper step={"step1"} />
            <div className="m-4 grid gap-6 sm:grid-cols-12">
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2 ">Car Year</p>
                <Field
                  type="date"
                  max={datePickerId}
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="car_year"
                  placeholder="Choose Year"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="car_year" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Brand</p>
                <Field
                  name="car_brand"
                  as="select"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  // onChange={(e) => {
                  //   selectModel(e.target.value);
                  // }}
                >
                  <option label="Choose Brand" value="" disabled />
                  {carData.Brands.map((brand) => {
                    return <option key={brand} label={brand} value={brand} />;
                  })}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="car_brand" />
                </div>
              </div>

              <div className="rounded-lg sm:col-span-6  sm:block">
                <p className="text-sm font-medium my-2">Model</p>
                <Field
                  name="model"
                  as="select"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  placeholder="Choose Model"
                >
                  <option value="" defaultValue={""}>
                    Choose Model
                  </option>

                  {/* {model?.map((model) => {
                    return <option key={model} label={model} value={model} />;
                  })} */}
                  {carData?.carModels?.Benz.map((model) => {
                    return <option key={model} label={model} value={model} />;
                  })}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="model" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Variant</p>
                <Field
                  name="variant"
                  as="select"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  placeholder="Choose Variant"
                >
                  <option value="" defaultValue={""}>
                    Choose Variant
                  </option>
                  {carData?.variants?.Benz?.AMG?.map((model) => {
                    return <option key={model} label={model} value={model} />;
                  })}
                  {/* {model?.map((model) => {
                  return <option key={model} label={model} value={model} />;
                })} */}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="variant" />
                </div>
              </div>
              {/* Row3 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Is you car brand new ?
                </p>
                <label class="py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="brand_new_car" value="Yes" />
                  Yes
                </label>
                <label class="py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field
                    type="radio"
                    name="brand_new_car"
                    value="No"
                    className="peer-checked:border-black"
                  />
                  No
                </label>
                {/* <div>Value: {formikProps.values.picked}</div> */}
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="brand_new_car" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Are you buying you first car?
                </p>
                {/* <Field name="first_car" placeholder="Choose Variant" /> */}
                <label class="py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="first_car" value="Yes" />
                  Yes
                </label>
                <label class="py-3 text-xs inline-flex items-center text-center w-56 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="first_car" value="No" />
                  No
                </label>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="first_car" />
                </div>
              </div>
              {/* Row4 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  When was you car first registered?
                </p>
                <Field
                  type="date"
                  max={datePickerId}
                  name="car_first_registered"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  placeholder="Choose Date"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="car_first_registered" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  In which city do you want to register this car?
                </p>
                <Field
                  name="city"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  placeholder="Choose City"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="city" />
                </div>
              </div>
              {/* Row5 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Is this car GCC spec AND unmodified?
                </p>
                {/* <Field name="GCCspec" placeholder="Choose Variant" /> */}
                <label class=" text-xs text-center inline-flex items-center w-56 mr-2 p-2 py-3 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="gcc_spec" value="Yes" />
                  Yes
                </label>
                <label class=" inline-flex items-center text-center w-56 mr-2 p-2 py-3 text-xs text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="gcc_spec" value="No" />
                  No
                </label>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="gcc_spec" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Is the current policy fully comprehensive?
                </p>
                {/* <Field name="last_name" placeholder="Choose Variant" /> */}
                <label class=" py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field
                    type="radio"
                    name="is_fully_comprehensive"
                    value="Yes"
                  />
                  Yes
                </label>
                <label class="py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field
                    type="radio"
                    name="is_fully_comprehensive"
                    value="No"
                  />
                  No
                </label>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="is_fully_comprehensive" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block ">
                <p className="text-sm font-medium my-2">
                  Does the current policy of this car include agency repair?
                </p>
                <label class=" py-3 text-xs  inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="agency_repair" value="Yes" />
                  Yes
                </label>
                <label class="py-3 text-xs inline-flex items-center text-center w-56 mr-2 p-2 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100">
                  <Field type="radio" name="agency_repair" value="No" />
                  No
                </label>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="agency_repair" />
                </div>
              </div>
            </div>
            <button
              className="lg:w-auto w-full py-4 px-12 text-xs bg-blue-700 rounded-3xl sm:float-right text-white "
              type="submit"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  // step2 validationschema
  const stepTwoValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    nationality: Yup.string().required().label("Nationality"),
    full_name: Yup.string().required().label("Full name"),
    country: Yup.string().required().label("County"),
    experience: Yup.string().required().label("This"),
    insurance: Yup.string().required().label("This"),
    dob: Yup.string().required().label("DOB"),
    mobile_number: Yup.string().required().label("Mobile Number"),
    duration: Yup.string().required().label("This"),
  });
  //Steptwo
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
    };

    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className=" my-6 p-2 ">
            <Stepper step={"step2"} />
            <div className="m-4 grid gap-6 sm:grid-cols-12">
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Nationality</p>
                <Field
                  name="nationality"
                  as="select"
                  placeholder=" Choose Nationality"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                >
                  <option label="Choose Nationality" value="" disabled />
                  {carData?.nationality?.map((nationality) => {
                    return (
                      <option
                        key={nationality}
                        label={nationality}
                        value={nationality}
                      />
                    );
                  })}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="nationality" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Which country issued your first driving license?
                </p>
                <Field
                  name="country"
                  as="select"
                  placeholder="Choose Country"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                >
                  <option label="Choose Country" value="" disabled />
                  {carData?.country?.map((country) => {
                    return (
                      <option key={country} label={country} value={country} />
                    );
                  })}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  How many years of international driving experience do you
                  have?
                </p>
                <Field
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="experience"
                  placeholder="Enter Years of Experience"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="experience" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  How long you have been driving in the UAE?
                </p>
                <Field
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="duration"
                  placeholder="Enter Duration in Years"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="duration" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Full Name </p>
                <Field
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="full_name"
                  placeholder=" Enter Full Name"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="full_name" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Mobile Number</p>
                <Field
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="mobile_number"
                  type="number"
                  placeholder="Enter Mobile Number"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="mobile_number" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Email Address </p>
                <Field
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="email"
                  placeholder=" Enter Email"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">Date of Birth</p>
                <Field
                  type="date"
                  max={datePickerId}
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                  name="dob"
                  placeholder="Choose Date of birth"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="dob" />
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2">
                  Are you looking for Fully Comprehensive insurance, or other
                </p>
                <Field
                  name="insurance"
                  as="select"
                  className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                >
                  <option label="Choose Insurance" disabled value="" />
                  {carData?.insurance?.map((insurance) => {
                    return (
                      <option
                        key={insurance}
                        label={insurance}
                        value={insurance}
                      />
                    );
                  })}
                </Field>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="insurance" />
                </div>
              </div>
            </div>
            <div className="m-4 grid gap-4 sm:grid-cols-12">
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <button
                  onClick={() => props.prev(values)}
                  className=" lg:w-auto  w-full py-4 px-16 text-xs my-auto bg-blue-700 rounded-3xl sm:float-left text-white "
                  type="button"
                >
                  Back
                </button>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <button
                  // onClick={() => props.next(values, true)}
                  className=" lg:w-auto  w-full py-4 px-12 text-xs my-auto bg-blue-700 rounded-3xl sm:float-right text-white "
                  type="submit"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  const [data, setData] = useState({
    model: "",
    email: "",
    car_year: "",
    car_brand: "",
    insurance: "",
    is_fully_comprehensive: "",
    variant: "",
    brand_new_car: "",
    car_first_registered: "",
    first_car: "",
    city: "",
    gcc_spec: "",
    nationality: "",
    agency_repair: "",
    country: "",
    experience: "",
    duration: "",
    full_name: "",
    dob: "",
    mobile_number: "",
  });

  const makeRequest = (formData) => {
    setIsOpen(true);
    console.log(formData, "Form submitted");
  };
  const handleNextStep = (newData, final) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];
  return (
    <div className="border border-2 grey-500 rounded-xl">
      <div className="p-6">
        <div className="items-center justify-between">
          <div className="text-xl text-center">Get Your Insurance Quote</div>
          <div className="text-xl text-center">In A Few Clicks!</div>
          {steps[currentStep]}
          <Modal modal={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default InsuranceQuote;
