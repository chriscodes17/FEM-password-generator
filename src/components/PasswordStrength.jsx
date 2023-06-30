import Bar from "./Bar";
const barArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function PasswordStrength({ strengthVal }) {
  return (
    <div className="strength-container">
      <p className="strength-text">STRENGTH</p>
      <div className="bar-text">
        {strengthVal && <p className="strength-value">{strengthVal}</p>}
        <div className="bar-container">
          {barArray.map((e) => (
            <Bar key={e.id} id={e.id} strengthVal={strengthVal} />
          ))}
        </div>
      </div>
    </div>
  );
}
