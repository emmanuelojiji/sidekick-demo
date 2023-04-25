import "./Progress.scss";
import icon from "../Media/icon-start.svg";

const Start = ({onClick}) => {
  return (
    <div className="status-icon-container start" onClick={onClick}>
      <img src={icon} />
    </div>
  );
};

export default Start;
