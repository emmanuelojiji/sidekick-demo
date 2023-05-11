import "./Step.scss";
import tick from "../Media/icon-tick.svg";

const Step = ({
  heading,
  subheading,
  background,
  icon,
  onClick,
  cursor,
  showTick,
  progressed,
  progressBarColor,
}) => {
  return (
    <div className="Step" onClick={onClick}>
      <div className="progress-outer">
        <div
          className={`progress-inner ${progressed}`}
          style={{ background: progressBarColor }}
        ></div>
      </div>
      <img src={tick} className={`tick ${showTick}`} />
      <div className="step-content" style={{ cursor: cursor }}>
        <div className="icon-container" style={{ background }}>
          {icon}
        </div>
        <h3 className="heading">{heading}</h3>
        <p className="sub-heading">{subheading}</p>
      </div>
    </div>
  );
};

export default Step;
