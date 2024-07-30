"use client";
import Select from "react-select";
import { useFormik } from "formik";
import SelectComponent from "../../selectComponent/selectComponent";
import { useState } from "react";
import Stepper from "../3stepper/Stepper";
import { carData } from "../../../mocks/mock";
import Modal from "../modal/Modal";
// import HorizontalLinearStepper from "../stepper/Stepper";
// import SelectComponent from "../selectComponent/selectComponent";

function InsuranceQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const dataInitialValues = {
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
    agency_repair: "",
    nationality: "",
    country: "",
    experience: "",
    duration: "",
    registration_date: "",
    claimed_date: "",
    full_name: "",
    mobile_number: "",
    email: "",
    dob: "",
  };
  const [data, setData] = useState(dataInitialValues);
  const datePickerId = new Date().toISOString().split("T")[0];
  // console.log(data, "data")

  //StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };
    const validate = (values) => {
      const errors = {};
      if (!values.car_year) {
        errors.car_year = "This field is required.";
      }
      if (!values.car_brand) {
        errors.car_brand = "This field is required.";
      }
      if (!values.model) {
        errors.model = "This field is required.";
      }
      if (!values.variant) {
        errors.variant = "This field is required.";
      }
      if (!values.is_fully_comprehensive) {
        errors.is_fully_comprehensive = "This field is required.";
      }
      if (!values.brand_new_car) {
        errors.brand_new_car = "This field is required.";
      }
      if (!values.car_first_registered) {
        errors.car_first_registered = "This field is required.";
      }
      if (!values.first_car) {
        errors.first_car = "This field is required.";
      }
      if (!values.city) {
        errors.city = "This field is required.";
      }
      if (!values.gcc_spec) {
        errors.gcc_spec = "This field is required.";
      }

      if (!values.agency_repair) {
        errors.agency_repair = "This field is required.";
      }
      return errors;
    };
    const formik = useFormik({
      // isInitialValid:true,
      // validateOnMount:true,
      // validateOnChange:false,
      // validateOnBlur:false,
      initialValues: {
        car_year: data.car_year,
        car_brand: data.car_brand,
        model: data.model,
        variant: data.variant,
        is_fully_comprehensive: data.is_fully_comprehensive,
        brand_new_car: data.brand_new_car,
        car_first_registered: data.car_first_registered,
        first_car: data.first_car,
        city: data.city,
        gcc_spec: data.gcc_spec,

        agency_repair: data.agency_repair,
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <div className="  lg:m-0 sm:my-6 sm:p-2 text-sm">
          {/* inputs div */}
          <div className="m-4 grid gap-6 sm:grid-cols-12">
            {/* Row1 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Car Year
              </p>
              <SelectComponent
                options={carData?.optionsYears}
                value={formik.values.car_year}
                onChange={(value) =>
                  formik.setFieldValue("car_year", value.value)
                }
                placeholder={"Choose Year"}
                isSearchable
                classNames={{
                  control: () =>
                    "border-2 border-gray-200 rounded-md p-0 text-xs",
                  // "border-2 border-gray-200 rounded-md  text-xs",
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.car_year ? (
                <div className="error-text">{formik.errors.car_year}</div>
              ) : null}
            </div>
            {/* 1.2 */}
            <div className=" rounded-lg sm:col-span-6 sm:block ">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Brand
              </p>
              <SelectComponent
                value={formik.values.car_brand}
                onChange={(value) =>
                  formik.setFieldValue("car_brand", value.value)
                }
                options={carData?.optionsBrand}
                placeholder={"Choose Brand"}
                isSearchable
                classNames={{
                  control: () =>
                    "border-2 border-gray-200 rounded-md p-0 text-xs",
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.car_brand ? (
                <div className="error-text">{formik.errors.car_brand}</div>
              ) : null}
            </div>
            {/* Row2 */}
            <div className="rounded-lg sm:col-span-6  sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Model
              </p>

              <SelectComponent
                value={formik.values.model}
                onChange={(value) => formik.setFieldValue("model", value.value)}
                options={carData?.optionsModels}
                placeholder={"Choose Model"}
                isSearchable
                classNames={{
                  control: () =>
                    "border-2 border-gray-200 rounded-md p-0 text-xs",
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.model ? (
                <div className="error-text">{formik.errors.model}</div>
              ) : null}
            </div>
            {/* 2.2 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Variant
              </p>
              <SelectComponent
                value={formik.values.variant}
                onChange={(value) =>
                  formik.setFieldValue("variant", value.value)
                }
                options={carData?.optionsVariants}
                placeholder={"Choose Variant"}
                isSearchable
                classNames={{
                  control: () =>
                    "border-2 border-gray-200 rounded-md p-0 text-xs",
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.variant ? (
                <div className="error-text">{formik.errors.variant}</div>
              ) : null}
            </div>

            {/* Row3 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Is you car brand new ?
              </p>

              <ul className="grid  grid-cols-12">
                <li className="mx-2 col-span-6">
                  <input
                    type="radio"
                    id="brand_new_car_yes"
                    name="brand_new_car"
                    value="Yes"
                    onChange={formik.handleChange}
                    // value={formik.values.brand_new_car}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="brand_new_car_yes"
                    className="label-radio-btn"
                  >
                    <div className="block">
                      <div className="w-full">Yes</div>
                    </div>
                  </label>
                </li>
                <li className="mx-2 col-span-6">
                  <input
                    type="radio"
                    id="brand_new_car_no"
                    name="brand_new_car"
                    value="No"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="brand_new_car_no" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">No</div>
                    </div>
                  </label>
                </li>
              </ul>

              {formik.errors.brand_new_car ? (
                <div className="error-text">{formik.errors.brand_new_car}</div>
              ) : null}
            </div>
            {/* 3.2 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Are you buying you first car?
              </p>
              <ul className="grid  grid-cols-2">
                <li className="mx-2">
                  <input
                    type="radio"
                    id="first_car_yes"
                    name="first_car"
                    value="Yes"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="first_car_yes" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">Yes</div>
                    </div>
                  </label>
                </li>
                <li className="mx-2">
                  <input
                    type="radio"
                    id="first_car_no"
                    name="first_car"
                    value="No"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="first_car_no" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">No</div>
                    </div>
                  </label>
                </li>
              </ul>

              {formik.errors.first_car ? (
                <div className="error-text">{formik.errors.first_car}</div>
              ) : null}
            </div>

            {/* Row4 date*/}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                When was you car first registered?
              </p>
              <input
                type="date"
                max={datePickerId}
                onChange={formik.handleChange}
                name="car_first_registered"
                className="border-2 radius-lg  radius-lg rounded-md p-2.5 w-full text-xs "
                placeholder="Choose Date"
              />
              {formik.errors.car_first_registered ? (
                <div className="error-text">
                  {formik.errors.car_first_registered}
                </div>
              ) : null}
            </div>
            {/* 4.2 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                In which city do you want to register this car?
              </p>
              <SelectComponent
                value={formik.values.city}
                onChange={(value) => formik.setFieldValue("city", value.value)}
                options={carData?.optionsCities}
                placeholder={"Choose City"}
                isSearchable
                classNames={{
                  control: () => "text-xs",
                  borderColor: "black",
                  // control: ({  }) => (
                  //   "text-xs",
                  //   // borderColor: "border red-500",
                  //   // '&:hover': {
                  //   //   borderColor: "green"
                  //   // }
                  // ),
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.city ? (
                <div className="error-text">{formik.errors.city}</div>
              ) : null}
            </div>

            {/* Row5 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Is this car GCC spec AND unmodified?
              </p>
              <ul className="grid grid-cols-2">
                <li className="mx-2">
                  <input
                    type="radio"
                    id="gcc_spec_yes"
                    name="gcc_spec"
                    value="Yes"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="gcc_spec_yes" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">Yes</div>
                    </div>
                  </label>
                </li>
                <li className="mx-2">
                  <input
                    type="radio"
                    id="gcc_spec_no"
                    name="gcc_spec"
                    value="No"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="gcc_spec_no" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">No</div>
                    </div>
                  </label>
                </li>
              </ul>
              {formik.errors.gcc_spec ? (
                <div className="error-text">{formik.errors.gcc_spec}</div>
              ) : null}
            </div>
            {/* 5.2 */}
            <div className="rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Is the current policy fully comprehensive?
              </p>
              <ul className="grid  grid-cols-2">
                <li className="mx-2">
                  <input
                    type="radio"
                    id="is_fully_comprehensive_yes"
                    name="is_fully_comprehensive"
                    value="Yes"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="is_fully_comprehensive_yes"
                    className="label-radio-btn"
                  >
                    <div className="block">
                      <div className="w-full">Yes</div>
                    </div>
                  </label>
                </li>
                <li className="mx-2">
                  <input
                    type="radio"
                    id="is_fully_comprehensive_no"
                    name="is_fully_comprehensive"
                    value="No"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="is_fully_comprehensive_no"
                    className="label-radio-btn"
                  >
                    <div className="block">
                      <div className="w-full">No</div>
                    </div>
                  </label>
                </li>
              </ul>
              {formik.errors.is_fully_comprehensive ? (
                <div className="error-text">
                  {formik.errors.is_fully_comprehensive}
                </div>
              ) : null}
            </div>
            {/* row6.1 */}
            <div className="rounded-lg sm:col-span-6 sm:block ">
              <p className="text-sm font-medium my-2 ">
                Does the current policy of this car include agency repair?
              </p>

              <ul className="grid grid-cols-2">
                <li className="mx-2">
                  <input
                    type="radio"
                    id="agency_repair_yes"
                    name="agency_repair"
                    value="Yes"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="agency_repair_yes"
                    className="label-radio-btn"
                  >
                    <div className="block">
                      <div className="w-full">Yes</div>
                    </div>
                  </label>
                </li>
                <li className="mx-2">
                  <input
                    type="radio"
                    id="agency_repair_no"
                    name="agency_repair"
                    value="No"
                    onChange={formik.handleChange}
                    className="hidden peer"
                  />
                  <label htmlFor="agency_repair_no" className="label-radio-btn">
                    <div className="block">
                      <div className="w-full">No</div>
                    </div>
                  </label>
                </li>
              </ul>
              {formik.errors.agency_repair ? (
                <div className="error-text">{formik.errors.agency_repair}</div>
              ) : null}
            </div>
          </div>
          {/* continue Button */}
          <button
            className="m-4 mx-10 lg:mx-6 w-3/4  lg:w-auto  py-3 px-12 text-xs bg-blue-600 rounded-3xl sm:float-right text-white "
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    );
  };

  //Steptwo
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
    };
    const validate = (values) => {
      const errors = {};
      if (!values.nationality) {
        errors.nationality = "This field is required.";
      }
      if (!values.country) {
        errors.country = "This field is required.";
      }
      if (!values.experience) {
        errors.experience = "This field is required.";
      }
      if (!values.duration) {
        errors.duration = "This field is required.";
      }
      // if (!values.registration_date) {
      //   errors.registration_date = "Required Field registration_date*";
      // }
      // if (!values.claimed_date) {
      //   errors.claimed_date = "Required Field claimed_date*";
      // }
      if (!values.full_name) {
        errors.full_name = "This field is required.";
      }
      if (!values.mobile_number) {
        errors.mobile_number = "This field is required.";
      }
      if (!values.full_name) {
        errors.full_name = "This field is required.";
      }
      if (!values.email) {
        errors.email = "This field is required.";
      }
      if (!values.dob) {
        errors.dob = "This field is required.";
      }
      if (!values.insurance) {
        errors.insurance = "This field is required.";
      }
      return errors;
    };
    const formik = useFormik({
      // validateOnChange: false,
      // validateOnBlur: false,
      initialValues: {
        nationality: "",
        country: "",
        experience: "",
        duration: "",
        registration_date: "",
        claimed_date: "",
        full_name: "",
        mobile_number: "",
        email: "",
        dob: "",
        insurance: "",
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div className="lg:m-0 sm:my-6 sm:p-2">
          <div className="m-4 grid gap-6 sm:grid-cols-12">
            {/* Row1 */}
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Nationality
              </p>
              <div>
                <SelectComponent
                  options={carData?.optionsNationalities}
                  value={formik.values.nationality}
                  onChange={(value) =>
                    formik.setFieldValue("nationality", value.value)
                  }
                  placeholder={"Choose Nationality"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                {formik.errors.nationality ? (
                  <div className="error-text">{formik.errors.nationality}</div>
                ) : null}
              </div>
            </div>
            {/* 1.2 */}
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-medium my-2 sm:h-10 lg:h-auto">
                Which country issued your first driving license?
              </p>
              <div className="">
                <SelectComponent
                  value={formik.values.country}
                  onChange={(value) =>
                    formik.setFieldValue("country", value.value)
                  }
                  options={carData.optionsCountry}
                  placeholder={"Choose Country"}
                  isSearchable
                  classNames={{
                    control: () =>
                      "border-2 border-gray-200 rounded-md p-0 text-xs",
                    menu: () => "text-xs",
                  }}
                />
                {formik.errors.country ? (
                  <div className="error-text">{formik.errors.country}</div>
                ) : null}
              </div>
            </div>

            {/* ROW2 */}
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                How many years of international driving experience do you have?
              </p>
              <input
                type="text"
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="experience"
                onChange={formik.handleChange}
                placeholder="Enter Years of Experience"
              />
              {formik.errors.experience ? (
                <div className="error-text">{formik.errors.experience}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                How long you have been driving in the UAE?
              </p>
              <input
                type="text"
                onChange={formik.handleChange}
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="duration"
                placeholder="Enter Duration in Years"
              />
              {formik.errors.duration ? (
                <div className="error-text">{formik.errors.duration}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Full Name{" "}
              </p>
              <input
                type="text"
                onChange={formik.handleChange}
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="full_name"
                placeholder=" Enter Full Name"
              />
              {formik.errors.full_name ? (
                <div className="error-text">{formik.errors.full_name}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Mobile Number
              </p>
              <input
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="mobile_number"
                type="number"
                onChange={formik.handleChange}
                placeholder="Enter Mobile Number"
              />
              {formik.errors.mobile_number ? (
                <div className="error-text">{formik.errors.mobile_number}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Email Address
              </p>
              <input
                type="email"
                onChange={formik.handleChange}
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="email"
                placeholder=" Enter Email"
              />
              {formik.errors.email ? (
                <div className="error-text">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Date of Birth
              </p>
              <input
                type="date"
                max={datePickerId}
                onChange={formik.handleChange}
                className="border-2 radius-lg  radius-lg rounded-md p-3 w-full text-xs"
                name="dob"
                placeholder="Choose Date of birth"
              />
              {formik.errors.dob ? (
                <div className="error-text">{formik.errors.dob}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="text-sm font-normal my-2 sm:h-10 lg:h-auto">
                Are you looking for Fully Comprehensive insurance, or other
              </p>
              <SelectComponent
                value={formik.values.insurance}
                onChange={(value) =>
                  formik.setFieldValue("insurance", value.value)
                }
                options={carData.optionsInsurance}
                placeholder={"Choose"}
                isSearchable
                classNames={{
                  control: () =>
                    "border-2 border-gray-200 rounded-md p-0 text-xs",
                  menu: () => "text-xs",
                }}
              />
              {formik.errors.insurance ? (
                <div className="error-text">{formik.errors.insurance}</div>
              ) : null}
            </div>
          </div>

          {/* //buttons div */}
          <div className="m-4 gdiv gap-4 sm:grid-cols-12">
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <button
                onClick={() => props.prev(formik.values)}
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
        </div>
      </form>
    );
  };

  const makeRequest = (formData) => {
    setIsOpen(true);
    setData(dataInitialValues);
    setCurrentStep(0);
    console.log(formData, "Form submitted");
  };
  const handleNextStep = (newData, final) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(data);
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
    <>
      <Modal modal={isOpen} setIsOpen={setIsOpen} />
      <div className="border-2 grey-500 rounded-xl h-auto contain-content md:pb-6">
        <div className="items-center justify-between">
          <div className="text-xl text-center mt-6">
            Get Your Insurance Quote
          </div>
          <div className="text-xl text-center">In A Few Clicks!</div>
          <Stepper step={currentStep + 1} setCurrentStep={setCurrentStep} />
          {steps[currentStep]}
        </div>
      </div>
    </>
  );
}

export default InsuranceQuote;
