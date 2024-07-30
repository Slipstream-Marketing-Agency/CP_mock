"use client";
import Select from "react-select";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Stepper from "../3stepper/Stepper";
import { carData } from "../../../mocks/mock";
import Modal from "../modal/Modal";
// import HorizontalLinearStepper from "../stepper/Stepper";
// import SelectComponent from "../selectComponent/selectComponent";

function InsuranceQuote_old() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionBrand, setSelectedOptionBrand] = useState("");
  const [errorOptionBrand, setErrorOptionBrand] = useState(false);
  const [selectedOptionYear, setSelectedOptionYear] = useState("");
  const [errorOptionYear, setErrorOptionYear] = useState(false);
  const [selectedOptionModel, setSelectedOptionModel] = useState("");
  const [errorOptionModel, setErrorOptionModel] = useState(false);
  const [selectedOptionVariant, setSelectedOptionVariant] = useState("");
  const [errorOptionVariant, setErrorOptionVariant] = useState(false);
  const [selectedOptionCity, setSelectedOptionCity] = useState("");
  const [errorOptionCity, setErrorOptionCity] = useState(false);

  const [selectedOptionCountry, setSelectedOptionCountry] = useState("");
  const [errorOptionCountry, setErrorOptionCountry] = useState(false);
  const [selectedOptionNationality, setSelectedOptionNationality] =
    useState("");
  const [errorOptionNationality, setErrorOptionNationality] = useState(false);
  const [selectedOptionInsurance, setSelectedOptionInsurance] = useState("");
  const [errorOptionInsurance, setErrorOptionInsurance] = useState(false);

  useEffect(() => {
    setData({
      ...data,
      car_year: selectedOptionYear,
      car_brand: selectedOptionBrand,
      variant: selectedOptionVariant,
      model: selectedOptionModel,
      city: selectedOptionCity,

      nationality: selectedOptionNationality,
      country: selectedOptionCountry,
      insurance: selectedOptionInsurance,
    });
    if (selectedOptionBrand !== "") {
      setErrorOptionBrand(false);
    }
    if (selectedOptionYear !== "") {
      setErrorOptionYear(false);
    }
    if (selectedOptionModel !== "") {
      setErrorOptionModel(false);
    }

    if (selectedOptionVariant !== "") {
      setErrorOptionVariant(false);
    }
    if (selectedOptionCity !== "") {
      setErrorOptionCity(false);
    }
    if (selectedOptionNationality !== "") {
      setErrorOptionNationality(false);
    }
    if (selectedOptionCountry !== "") {
      setErrorOptionCountry(false);
    }
    if (selectedOptionInsurance !== "") {
      setErrorOptionInsurance(false);
    }
  }, [
    selectedOptionBrand,
    selectedOptionYear,
    selectedOptionModel,
    selectedOptionVariant,
    selectedOptionCity,
    selectedOptionNationality,
    selectedOptionCountry,
    selectedOptionInsurance,
  ]);

  const datePickerId = new Date().toISOString().split("T")[0];

  // Step1ValidationSchema
  const stepOneValidationSchema = Yup.object({
    first_car: Yup.string().required().label("This"),
    brand_new_car: Yup.string().required().label("This"),
    car_first_registered: Yup.string().required().label("This"),
    gcc_spec: Yup.string().required().label("This"),
    agency_repair: Yup.string().required().label("This"),
    is_fully_comprehensive: Yup.string().required().label("This"),
  });
  //StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      if ( selectedOptionYear === "") {
        setErrorOptionYear(true);
      } else if (selectedOptionBrand === "") {
        setErrorOptionBrand(true);
      } else if (selectedOptionModel === "") {
        setErrorOptionModel(true);
      } else if (selectedOptionVariant === "") {
        setErrorOptionVariant(true);
      } else if (selectedOptionCity === "") {
        setErrorOptionCity(true);
      } else {
        props.next(values, false);
      }
    };
    console.log(data, "data");
    return (
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className=" my-6 p-2 text-sm">
            <div className="m-4 grid gap-6 sm:grid-cols-12">
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Car Year
                </p>
                <Select
                  defaultValue={selectedOptionYear}
                  onChange={setSelectedOptionYear}
                  options={carData?.optionsYears}
                  placeholder={"Choose Year"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionYear ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block ">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Brand
                </p>
                <Select
                  defaultValue={selectedOptionBrand}
                  onChange={setSelectedOptionBrand}
                  options={carData?.optionsBrand}
                  placeholder={"Choose Brand"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionBrand ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>

              <div className="rounded-lg sm:col-span-6  sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Model
                </p>

                <Select
                  defaultValue={selectedOptionModel}
                  onChange={setSelectedOptionModel}
                  options={carData?.optionsModels}
                  placeholder={"Choose Model"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionModel ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Variant
                </p>
                <Select
                  defaultValue={selectedOptionVariant}
                  onChange={setSelectedOptionVariant}
                  options={carData?.optionsVariants}
                  placeholder={"Choose Varaint"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionVariant ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>
              {/* Row3 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Is you car brand new ?
                </p>

                <ul class="grid  md:grid-cols-2">
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="brand_new_car_yes"
                      name="brand_new_car"
                      value="Yes"
                      class="hidden peer"
                    />
                    <label
                      for="brand_new_car_yes"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="brand_new_car_no"
                      name="brand_new_car"
                      value="No"
                      class="hidden peer"
                    />
                    <label
                      for="brand_new_car_no"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">No</div>
                      </div>
                    </label>
                  </li>
                </ul>

                <div className="text-red-500 text-xs">
                  <ErrorMessage name="brand_new_car" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Are you buying you first car?
                </p>
                <ul class="grid  md:grid-cols-2">
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="first_car_yes"
                      name="first_car"
                      value="Yes"
                      class="hidden peer"
                    />
                    <label
                      for="first_car_yes"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="first_car_no"
                      name="first_car"
                      value="No"
                      class="hidden peer"
                    />
                    <label
                      for="first_car_no"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">No</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="first_car" />
                </div>
              </div>
              {/* Row4 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  When was you car first registered?
                </p>
                <Field
                  type="date"
                  max={datePickerId}
                  name="car_first_registered"
                  className="border-2 radius-lg  radius-lg rounded-md p-2.5 w-full text-xs "
                  placeholder="Choose Date"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="car_first_registered" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  In which city do you want to register this car?
                </p>
                <Select
                  defaultValue={selectedOptionCity}
                  onChange={setSelectedOptionCity}
                  options={carData?.optionsCities}
                  placeholder={"Choose City"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md  text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionCity ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>
              {/* Row5 */}
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Is this car GCC spec AND unmodified?
                </p>
                <ul class="grid  md:grid-cols-2">
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="gcc_spec_yes"
                      name="gcc_spec"
                      value="Yes"
                      class="hidden peer"
                    />
                    <label
                      for="gcc_spec_yes"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="gcc_spec_no"
                      name="gcc_spec"
                      value="No"
                      class="hidden peer"
                    />
                    <label
                      for="gcc_spec_no"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">No</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="gcc_spec" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Is the current policy fully comprehensive?
                </p>
                <ul class="grid  md:grid-cols-2">
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="is_fully_comprehensive_yes"
                      name="is_fully_comprehensive"
                      value="Yes"
                      class="hidden peer"
                    />
                    <label
                      for="is_fully_comprehensive_yes"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="is_fully_comprehensive_no"
                      name="is_fully_comprehensive"
                      value="No"
                      class="hidden peer"
                    />
                    <label
                      for="is_fully_comprehensive_no"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">No</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="is_fully_comprehensive" />
                </div>
              </div>
              <div className="rounded-lg sm:col-span-6 sm:block ">
                <p className="text-sm font-medium my-2 ">
                  Does the current policy of this car include agency repair?
                </p>

                <ul class="grid  md:grid-cols-2">
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="agency_repair_yes"
                      name="agency_repair"
                      value="Yes"
                      class="hidden peer"
                    />
                    <label
                      for="agency_repair_yes"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li className="mx-2">
                    <Field
                      type="radio"
                      id="agency_repair_no"
                      name="agency_repair"
                      value="No"
                      class="hidden peer"
                    />
                    <label
                      for="agency_repair_no"
                      class="inline-flex items-center justify-center w-full p-2 text-black bg-white  border-gray-300 rounded-lg cursor-pointer dark:hover:text-gray-300 border-2 dark:border-gray-300 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-100 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-100"
                    >
                      <div class="block">
                        <div class="w-full">No</div>
                      </div>
                    </label>
                  </li>
                </ul>
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
    // email: Yup.string().required().email().label("Email"),
    // nationality: Yup.string().required().label("Nationality"),
    // full_name: Yup.string().required().label("Full name"),
    // country: Yup.string().required().label("County"),
    // experience: Yup.string().required().label("This"),
    // insurance: Yup.string().required().label("This"),
    // dob: Yup.string().required().label("DOB"),
    // mobile_number: Yup.string().required().label("Mobile Number"),
    // duration: Yup.string().required().label("This"),
  });
  //Steptwo
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      if (selectedOptionCountry === "") {
        setErrorOptionCountry(true);
      } else if (selectedOptionNationality === "") {
        setErrorOptionNationality(true);
      } else if (selectedOptionInsurance === "") {
        setErrorOptionInsurance(true);
      } else {
        props.next(values, true);
      }
    };

    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className=" my-6 p-2 ">
            <div className="m-4 grid gap-6 sm:grid-cols-12">
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Nationality
                </p>
                <div>
                  <Select
                    defaultValue={selectedOptionNationality}
                    onChange={setSelectedOptionNationality}
                    options={carData.optionsNationalities}
                    placeholder={"Choose Nationality"}
                    isSearchable
                    classNames={{
                      control: () =>
                        "border-2 border-gray-200 rounded-md p-0 text-xs",
                      menu: () => "text-xs",
                    }}
                  />
                  <div
                    className={`${
                      errorOptionNationality ? "text-xs text-red-500" : "hidden"
                    }`}
                  >
                    This is a required field
                  </div>
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-medium my-2 sm:h-10 lg:h-auto">
                  Which country issued your first driving license?
                </p>
                <div className="">
                  <Select
                    defaultValue={selectedOptionCountry}
                    onChange={setSelectedOptionCountry}
                    options={carData.optionsCountry}
                    placeholder={"Choose Country"}
                    isSearchable
                    classNames={{
                      control: () =>
                        "border-2 border-gray-200 rounded-md p-0 text-xs",
                      menu: () => "text-xs",
                    }}
                  />
                  <div
                    className={`${
                      errorOptionCountry ? "text-xs text-red-500" : "hidden"
                    }`}
                  >
                    This is a required field
                  </div>
                </div>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Full Name{" "}
                </p>
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Mobile Number
                </p>
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Email Address{" "}
                </p>
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Date of Birth
                </p>
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
                <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                  Are you looking for Fully Comprehensive insurance, or other
                </p>
                <Select
                  defaultValue={selectedOptionInsurance}
                  onChange={setSelectedOptionInsurance}
                  options={carData.optionsInsurance}
                  placeholder={"Choose"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                <div
                  className={`${
                    errorOptionInsurance ? "text-xs text-red-500" : "hidden"
                  }`}
                >
                  This is a required field
                </div>
              </div>
            </div>

            {/* //buttons div */}
            <div className="m-4 gdiv gap-4 sm:grid-cols-12">
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <button
                  onClick={() => props.prev(values)}
                  className=" lg:w-auto md:w-auto w-full py-4 px-16 text-xs md:my-auto my-2  bg-blue-700 rounded-3xl sm:float-left text-white "
                  type="button"
                >
                  Back
                </button>
              </div>
              <div className=" rounded-lg sm:col-span-6 sm:block">
                <button
                  // onClick={() => props.next(values, true)}
                  className=" lg:w-auto  md:w-auto w-full py-4 px-12 text-xs md:my-auto my-2 bg-blue-700 rounded-3xl sm:float-right text-white "
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
    car_year: "",
    car_brand: "",
    model: "",
    variant: "",
    insurance: "",
    is_fully_comprehensive: "",
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
    email: "",
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
          <Stepper step={currentStep + 1} setCurrentStep={setCurrentStep} />
          {steps[currentStep]}
          <Modal modal={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default InsuranceQuote_old;
