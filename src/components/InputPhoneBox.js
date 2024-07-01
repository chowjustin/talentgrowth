import React from "react";

const InputPhone = ({
  title,
  placeholder,
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
}) => {
  return (
    <div className="max-sm:px-0 p-4 space-y-2 max-sm:text-xs">
      <h2>{title}</h2>
      <div className="relative flex items-center">
        {countryCode && onCountryCodeChange && (
          <select
            value={countryCode}
            onChange={onCountryCodeChange}
            className="h-8 pl-2 pr-4 border-r focus:outline-purple-600"
          >
            <option value="+1">+1</option>
            <option value="+33">+33</option>
            <option value="+34">+34</option>
            <option value="+39">+39</option>
            <option value="+44">+44</option>
            <option value="+62">+62</option>
            <option value="+81">+81</option>
          </select>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-8 pl-2 focus:outline-purple-600"
        />
        <div className="absolute bottom-0 w-full h-[1px] bg-purple-600"></div>
      </div>
    </div>
  );
};

export default InputPhone;
