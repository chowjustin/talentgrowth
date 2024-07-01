import React from "react";

const InputDate = ({ title, value, onChange }) => {
  const handleDateChange = (e) => {
    const [year, month, day] = e.target.value.split("-");
    onChange(`${day}/${month}/${year}`);
  };

  return (
    <div className="max-sm:px-0 p-4 space-y-2 max-sm:text-xs">
      <h2>{title}</h2>
      <div className="relative">
        <input
          type="date"
          value={
            value
              ? `${value.split("/")[2]}-${value.split("/")[1]}-${
                  value.split("/")[0]
                }`
              : ""
          }
          onChange={handleDateChange}
          className="w-full h-8 pl-2 focus:outline-purple-600"
        />
        <div className="absolute bottom-0 w-full h-[1px] bg-purple-600"></div>
      </div>
    </div>
  );
};

export default InputDate;
