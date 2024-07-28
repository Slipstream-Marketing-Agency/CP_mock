"use client";
import Select from "react-select";

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
      />
    </div>
  );
}
