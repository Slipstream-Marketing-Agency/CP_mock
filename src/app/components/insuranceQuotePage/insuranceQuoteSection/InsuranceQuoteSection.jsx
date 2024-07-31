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
    // registration_date: "",
    // claimed_date: "",
    full_name: "",
    mobile_number: "",
    email: "",
    dob: "",
  };
  const [data, setData] = useState(dataInitialValues);
  const datePickerId = new Date().toISOString().split("T")[0];
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
        car_year: "",
        car_brand: "",
        model: "",
        variant: "",
        is_fully_comprehensive: "",
        brand_new_car: "",
        car_first_registered: "",
        first_car: "",
        city: "",
        gcc_spec: "",
        agency_repair: "",
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
              <p className="input-label 4xl:text-sm ">Car Year</p>
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
              <p className="input-label 4xl:text-sm">Brand</p>
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
              <p className="input-label 4xl:text-sm">Model</p>

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
              <p className="input-label 4xl:text-sm">Variant</p>
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
              <p className="input-label 4xl:text-sm">Is you car brand new ?</p>

              <ul className="grid  gap-4 grid-cols-2">
                <li className="">
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
                <li className="">
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
              <p className="input-label 4xl:text-sm">
                Are you buying you first car?
              </p>
              <ul className="grid  gap-4 grid-cols-2">
                <li className="">
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
                <li className="">
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
              <p className="input-label 4xl:text-sm">
                When was you car first registered?
              </p>
              <input
                type="date"
                max={datePickerId}
                onChange={formik.handleChange}
                name="car_first_registered"
                className="input-date "
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
              <p className="input-label 4xl:text-sm">
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
              <p className="input-label 4xl:text-sm">
                Is this car GCC spec AND unmodified?
              </p>
              <ul className="grid gap-4 grid-cols-2">
                <li className="">
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
                <li className="">
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
              <p className="input-label 4xl:text-sm">
                Is the current policy fully comprehensive?
              </p>
              <ul className="grid  gap-4 grid-cols-2">
                <li className="">
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
                <li className="">
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
              <p className="input-label 4xl:text-sm">
                Does the current policy of this car include agency repair?
              </p>

              <ul className="grid gap-4 grid-cols-2">
                <li className="">
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
                <li className="">
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
        // registration_date: data.registration_date,
        // claimed_date: data.claimed_date,
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
              <p className="input-label 4xl:text-sm">Nationality</p>
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
              <p className="input-label 4xl:text-sm ">
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
              <p className="input-label 4xl:text-sm">
                How many years of international driving experience do you have?
              </p>
              <input
                type="text"
                className="input-date"
                name="experience"
                onChange={formik.handleChange}
                placeholder="Enter Years of Experience"
              />
              {formik.errors.experience ? (
                <div className="error-text">{formik.errors.experience}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="input-label 4xl:text-sm">
                How long you have been driving in the UAE?
              </p>
              <input
                type="text"
                onChange={formik.handleChange}
                className="input-date"
                name="duration"
                placeholder="Enter Duration in Years"
              />
              {formik.errors.duration ? (
                <div className="error-text">{formik.errors.duration}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="input-label 4xl:text-sm">Full Name </p>
              <input
                type="text"
                onChange={formik.handleChange}
                className="input-date"
                name="full_name"
                placeholder=" Enter Full Name"
              />
              {formik.errors.full_name ? (
                <div className="error-text">{formik.errors.full_name}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="input-label 4xl:text-sm">Mobile Number</p>
              <input
                className="input-date"
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
              <p className="input-label 4xl:text-sm">Email Address</p>
              <input
                type="email"
                onChange={formik.handleChange}
                className="input-date"
                name="email"
                placeholder=" Enter Email"
              />
              {formik.errors.email ? (
                <div className="error-text">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="input-label 4xl:text-sm">Date of Birth</p>
              <input
                type="date"
                max={datePickerId}
                onChange={formik.handleChange}
                className="input-date"
                name="dob"
                placeholder="Choose Date of birth"
              />
              {formik.errors.dob ? (
                <div className="error-text">{formik.errors.dob}</div>
              ) : null}
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <p className="input-label 4xl:text-sm">
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
                // classNames={{
                //   control: () =>
                //     "border-none border-red-800 rounded-md text-xs",
                //   menu: () => "text-xs",
                // }}
                // classNames={{
                //   control: (state) =>
                //     state.isFocused ? 'border-red-600' : 'border-grey-300',
                // }}
                styles={{
                  input: (base) => ({
                    ...base,
                    "input:focus": {
                      boxShadow: "none",
                    },
                  }),
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
                className=" lg:w-auto md:w-auto w-full py-4 px-16 text-xs md:my-auto my-2  bg-blue-600 rounded-3xl sm:float-left text-white "
                type="button"
              >
                Back
              </button>
            </div>
            <div className=" rounded-lg sm:col-span-6 sm:block">
              <button
                // onClick={() => props.next(values, true)}
                className=" lg:w-auto  md:w-auto w-full py-4 px-12 text-xs md:my-auto my-2 bg-blue-600 rounded-3xl sm:float-right text-white "
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
