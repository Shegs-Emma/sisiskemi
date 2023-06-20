const InputBox = ({ placeholder, classname }) => {
  return (
    <input
      placeholder={placeholder}
      className={`${classname} text-xs px-4 py-5 border-[0.8px] border-grey-border rounded w-full outline-none`}
    />
  );
};

export default InputBox;
