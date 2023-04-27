import "./Progress.scss";
import icon from "../Media/icon-start.svg";

const Start = ({onClick}) => {
  return (
    <div className="status-container">
    <div className="status-icon-container start" onClick={onClick}>
      <img src={icon} />
    </div>
    <p>Start</p>
    </div>
  );
};

export default Start;
