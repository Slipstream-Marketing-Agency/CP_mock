"use client";

import SelectComponent from "../selectComponent/selectComponent";
import { carData } from "../../mocks/mock";
import { useFormik, Form, Formik, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";

function FormikSelect2({ setIsOpen, setCarSelected }) {
  const [data, setData] = useState({
    brand: "",
    model: "",
    year: "",
    variant: "",
  });

  useEffect(() => {
    // setData((prevData) => ({
    //   ...prevData,
    // }));
    // console.log(data, "data");
  }, []);

  // StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    const validate = (values) => {
      const errors = {};
      if (!values.brand) {
        errors.brand = "";
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        brand: "",
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div htmlFor="Brand" className="text-xl font-semibold my-2">
            Choose Brand
          </div>
          <button type="submit" className="w-full text-left">
            <SelectComponent
              options={carData?.optionsBrand}
              value={formik.values.model}
              onChange={(value) => formik.setFieldValue("brand", value.value)}
              placeholder={"Select brand"}
              classNames={{
                control: () => "border-2 border-gray-200 rounded-md  text-xs ",
                menu: () => "text-xs",
              }}
            />
          </button>

          {formik.errors.brand ? (
            <div className="text-red-400">{formik.errors.brand}</div>
          ) : null}
        </form>
      </div>
    );
  };

  // StepTwo
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    const validate = (values) => {
      const errors = {};
      if (!values.model) {
        errors.model = "";
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        model: "",
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div htmlFor="model" className="text-xl font-semibold my-2">
            Choose Model
          </div>
          <button type="submit" className="w-full text-left">
            <SelectComponent
              options={carData?.optionsModels}
              value={formik.values.model}
              onChange={(value) => formik.setFieldValue("model", value.value)}
              placeholder={"Select Model"}
            />
          </button>

          {formik.errors.model ? (
            <div className="text-red-400">{formik.errors.model}</div>
          ) : null}
        </form>
      </div>
    );
  };

  // step3
  const StepThree = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
    };

    const validate = (values) => {
      const errors = {};
      if (!values.year) {
        errors.year = "";
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        year: "",
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div htmlFor="year" className="text-xl font-semibold my-2">
            Choose year
          </div>
          <button type="submit" className="w-full text-left">
            <SelectComponent
              options={carData?.optionsYears}
              value={formik.values.year}
              onChange={(value) => formik.setFieldValue("year", value.value)}
              placeholder={"Select Year"}
            />
          </button>

          {formik.errors.year ? (
            <div className="text-red-400">{formik.errors.year}</div>
          ) : null}
        </form>
      </div>
    );
  };
  // step4
  const StepFour = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
    };

    const validate = (values) => {
      const errors = {};
      if (!values.variant) {
        errors.variant = "";
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        variant: "",
      },
      validate,
      onSubmit: (value) => {
        handleSubmit(value);
      },
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div htmlFor="variant" className="text-xl font-semibold my-2">
            Choose Variant
          </div>
          <button type="submit" className="w-full text-left">
            <SelectComponent
              options={carData?.optionsVariants}
              value={formik.values.variant}
              onChange={(value) => formik.setFieldValue("variant", value.value)}
              placeholder={"Select variant"}
            />
          </button>
          {/* <div onClick={handlePrevStep}>prev step</div> */}
          {formik.errors.variant ? (
            <div className="text-red-400">{formik.errors.variant}</div>
          ) : null}
        </form>
      </div>
    );
  };

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
    <div className="rounded-xl">
      <div className="p-0">{steps[currentStep]}</div>
    </div>
  );
}

export default FormikSelect2;
