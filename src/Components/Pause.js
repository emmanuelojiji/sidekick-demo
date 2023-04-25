import "./Progress.scss";
import icon from "../Media/icon-pause.svg";

const Pause = ({ onMouseLeave, onClick, onMouseEnter }) => {
  return (
    <div
      className="status-icon-container pause"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img src={icon} />
    </div>
  );
};

export default Pause;
