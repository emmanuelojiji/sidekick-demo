import tick from "../Media/icon-tick.svg";
import { styled } from "styled-components";

const StepContainer = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  
width: 14.2857142857%;
z-index: 2;
font-size: 12px;
position: relative;

.heading {
  margin-bottom: 5px;
}


.step-container {
  display: flex;
  padding-top: 50px;
  padding-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 5;
  background: #181e27;
}

.progress-outer {
  height: 4px;
  width: 100%;
  background: #0d141c;
  position: absolute;
  top: 45%;
  z-index: -1;
  .progress-inner {
    height: 100%;
    width: 100%;
   
    width: 0%;
  }
}

.icon-container {
  height: 78px;
  width: 78px;
  border-radius: 100%;
  background: #0d141c;
  transition: 0.3s ease-in-out;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.step-content {
  width: fit-content;
  text-align: center;
}

.tick {
  opacity: 0;
  visibility: hidden;
}

.tick-fade-in {
  animation: tick-fade-in 0.5s forwards linear;
}

@keyframes tick-fade-in {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

.progressed {
  animation: progressed 0.5s forwards;
  @keyframes progressed {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
}

`

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
    <StepContainer onClick={onClick}>
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
    </StepContainer>
  );
};

export default Step;
