import "./Progress.scss";
import icon from "../Media/icon-pause.svg";

const Pause = ({ onMouseLeave, onClick, onMouseEnter }) => {
  return (
    <div className="status-container">
      <div
        className="status-icon-container pause"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <img src={icon} />
      </div>
      <p>Paused</p>
    </div>
  );
};

export default Pause;
