import "./Step.scss";

const Step = ({ heading, subheading, background, icon }) => {
  return (
    <div className="Step">
      <div className="icon-container" style={{ background: background }}>
        {icon}
      </div>
      <h3 className="heading">{heading}</h3>
      <p className="sub-heading">{subheading}</p>
    </div>
  );
};

export default Step;
