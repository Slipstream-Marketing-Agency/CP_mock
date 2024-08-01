"use client";
import Select from "react-select";
const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize:"12px",
    borderColor: "#e5e7eb",
    borderRadius:"5px",
    padding:"1.5px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "black",
    },
  }),
  menu: (provided) => ({
    ...provided,
    fontSize:"12px",
    zIndex: 9999,
  }),
};

export default function SelectComponent({
  onChange,
  options,
  value,
  placeholder,
}) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <div className="w-full">
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        placeholder={placeholder}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
