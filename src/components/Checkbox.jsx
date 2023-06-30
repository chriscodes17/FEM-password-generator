export default function Checkbox({ name, label, handleOnChange, checked }) {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        type="checkbox"
        name={name}
        id=""
        checked={checked}
        onChange={handleOnChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
