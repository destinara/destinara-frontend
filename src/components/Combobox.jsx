export const Combobox = ({
  label,
  name,
  value,
  onChange,
  required = false,
  options = [],
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option className="text-gray-600" disabled value="">
          -- Pilih {label} --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
