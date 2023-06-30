import Slider from "react-input-slider";

export default function CharSlider({ value, setValue }) {
  const style = {
    track: {
      width: "100%",
      backgroundColor: "#18171F",
    },
    active: {
      backgroundColor: "#a4ffaf",
    },
    thumb: {
      width: 28,
      height: 28,
    },
  };
  return (
    <div className="slider-container">
      <div className="slider-text">
        <p className="char-text">Character Length</p>
        <p className="char-num">{value}</p>
      </div>
      <div className="slider">
        <Slider
          styles={style}
          axis="x"
          x={value}
          xmin={0}
          xmax={20}
          onChange={setValue}
        />
      </div>
    </div>
  );
}
