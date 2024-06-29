import "./Box.css";
function Box({ isActive, toggleIsActive }) {
  return (
    <div
      onClick={toggleIsActive}
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "black" }}
    ></div>
  );
}

export default Box;
