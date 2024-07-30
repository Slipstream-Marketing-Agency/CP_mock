  // StepOne
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values, false);
      console.log(" submitted props")

    };
    console.log(props,"props")
    const validate = (values) => {
      const errors = {};
      if (!values.brand) {
        errors.brand = "brand";
      }
      if (!values.email) {
        errors.email = "required field email";
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        // email: "",
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
        {/* <form onChange={formik.handleSubmit} > */}
          <div htmlFor="Brand" className="text-xl font-semibold my-2">
            Choose Brand
          </div>
          <SearchComponent
            options={carData?.chooseBrandModal}
            placeholder={"Search brand"}
            Formik={formik}
            // value={formik.values}
            // onChange={(value) => formik.setFieldValue("brand", value.value)}
            // placeholder={"Select brand"}
          />
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit" className="w-full text-left">
            button
          </button>
          {formik.errors.brand ? (
            <div className="text-red-400">{formik.errors.brand}</div>
          ) : null}
        </form>
      </div>
    );
  };