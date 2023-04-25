import "./Progress.scss";
import icon from "../Media/icon-in-progress.svg";

const InProgress = ({ onMouseEnter }) => {
  return (
    <div
      className="status-icon-container in-progress"
      style={{ backgroundColor: "#007bff" }}
      onMouseEnter={onMouseEnter}
    >
      <img src={icon} className="in-progress-icon" />
    </div>
  );
};

export default InProgress;
