export const Input = (props) => {
  const { children, name, type, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-600">{children}</label>
      <input
        className="p-2 border border-gray-300 rounded-md"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
