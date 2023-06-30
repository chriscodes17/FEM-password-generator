import Input from "./components/Input";
import PasswordOptions from "./components/PasswordOptions";
import PasswordStrength from "./components/PasswordStrength";
import checkboxData from "./utils/checkboxData";
import generatePassword from "./utils/passwordGenerator";
import checkPasswordStrength from "./utils/passwordStrengthCalc";
import { useState } from "react";
import "./App.css";
import GenerateButton from "./components/GenerateButton";

function App() {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [sliderValue, setSliderValue] = useState({ x: 0 });
  const [checkboxState, setCheckboxState] = useState(
    checkboxData.map((item) => {
      return { name: item.name, label: item.label, isChecked: false };
    })
  );

  const handleCheckboxChange = (index) => {
    setCheckboxState(
      checkboxState.map((item, i) => {
        return i === index ? { ...item, isChecked: !item.isChecked } : item;
      })
    );
  };

  const handleSubmit = () => {
    const passwordOptionsObj = checkboxState.reduce((acc, item) => {
      return {
        ...acc,
        [item.name]: item.isChecked,
      };
    }, {});
    const password = generatePassword(sliderValue.x, passwordOptionsObj);
    setPasswordValue(password);
    setPasswordStrength(checkPasswordStrength(password));
  };
  return (
    <div className="App">
      <header>
        <p>Password Generator</p>
      </header>
      <Input passwordValue={passwordValue} />
      <div className="app-container">
        <PasswordOptions
          checkboxData={checkboxData}
          value={sliderValue.x}
          setValue={setSliderValue}
          checkboxState={checkboxState}
          handleCheckboxChange={handleCheckboxChange}
        />
        <PasswordStrength strengthVal={passwordStrength} />
        <GenerateButton val={sliderValue.x} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
