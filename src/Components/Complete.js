import "./Progress.scss";
import icon from "../Media/icon-tick-big.svg";

const Complete = () => {
  return (
    <div className="status-container">
      <div className="status-icon-container complete">
        <img src={icon} />
      </div>
      <p>Completed</p>
    </div>
  );
};

export default Complete;
