import icon from "../Media/icon-start.svg";
import { styled } from "styled-components";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .status-icon-container {
    min-width: 94px;
    min-height: 94px;
    max-width: 94px;
    max-height: 94px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    margin-bottom: 17px;
  }

  .start,
  .complete {
    background: #479f6d;
    &:hover {
      background: #3d875d;
    }
  }

  .pause {
    background: #cf671b;
  }

  .in-progress-icon {
    animation: spin 10s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Start = ({onClick}) => {
  return (
    <StartContainer>
    <div className="status-icon-container start" onClick={onClick}>
      <img src={icon} />
    </div>
    <p>Start</p>
    </StartContainer>
  );
};

export default Start;
