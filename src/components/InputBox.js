const InputBox = ({ title, placeholder, value, onChange }) => {
  return (
    <div className="p-4 space-y-2">
      <h2>{title}</h2>
      <div className="relative">
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

export default InputBox;
