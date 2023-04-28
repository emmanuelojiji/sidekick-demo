import "./Step.scss";

const Step = ({ heading, subheading, background, icon, onClick, cursor }) => {
  return (
    <div className="Step" onClick={onClick}>
      <div className="step-content" style={{ cursor: cursor  }}>
        <div className="icon-container" style={{ background: background }}>
          {icon}
        </div>
        <h3 className="heading">{heading}</h3>
        <p className="sub-heading">{subheading}</p>
      </div>
    </div>
  );
};

export default Step;
