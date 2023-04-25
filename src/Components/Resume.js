import "./Progress.scss";
import icon from "../Media/icon-start.svg";

const Resume = ({onClick, onMouseLeave}) => {
  return (
    <div className="status-icon-container start" onClick={onClick} onMouseLeave={onMouseLeave}>
      <img src={icon} />
    </div>
  );
};

export default Resume;
