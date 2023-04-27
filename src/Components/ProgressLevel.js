import "./ProgressLevel.scss";

const ProgressLevel = ({ heading, subheading, background, icon }) => {
  return (
    <div className="ProgressLevel">
      <div className="icon-container" style={{ background: background }}>
        {icon}
      </div>
      <h3>{heading}</h3>
      <p>{subheading}</p>
    </div>
  );
};

export default ProgressLevel;
