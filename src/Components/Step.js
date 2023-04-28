import "./Step.scss";

const Step = ({ heading, subheading, background, icon, onClick }) => {
  return (
    <div className="Step" onClick={onClick}>
      <div className="icon-container" style={{ background: background }}>
        {icon}
      </div>
      <h3 className="heading">{heading}</h3>
      <p className="sub-heading">{subheading}</p>
    </div>
  );
};

export default Step;
