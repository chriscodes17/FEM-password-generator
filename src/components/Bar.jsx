export default function Bar({ strengthVal, id }) {
  let color = "black";
  if (strengthVal === "TOO WEAK" && id == 1) color = "#F64A4A";
  if (strengthVal === "WEAK" && id <= 2) color = "#FB7C58";
  if (strengthVal === "MEDIUM" && id <= 3) color = "#F8CD65";
  if (strengthVal === "STRONG" && id <= 4) color = "#A4FFAF";
  const styles = {
    backgroundColor: color,
  };
  return <div className="bar" style={styles}></div>;
}
