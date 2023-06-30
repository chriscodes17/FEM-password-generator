import Checkbox from "./Checkbox";
import CharSlider from "./CharSlider";

export default function PasswordOptions({
  value,
  setValue,
  checkboxState,
  handleCheckboxChange,
}) {
  return (
    <div className="options-container">
      <CharSlider value={value} setValue={setValue} />
      {checkboxState.map((e, i) => (
        <Checkbox
          key={e.name}
          name={e.name}
          label={e.label}
          checked={e.isChecked}
          handleOnChange={() => handleCheckboxChange(i)}
        />
      ))}
    </div>
  );
}
