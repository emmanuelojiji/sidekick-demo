import icon from "../Media/icon-in-progress.svg";
import { styled } from "styled-components";

const InProgressContainer = styled.div`
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

const InProgress = ({ onMouseEnter }) => {
  return (
    <InProgressContainer>
      <div
        className="status-icon-container in-progress"
        style={{ backgroundColor: "#007bff" }}
        onMouseEnter={onMouseEnter}
      >
        <img src={icon} className="in-progress-icon" />
      </div>
      <p>In Progress</p>
    </InProgressContainer>
  );
};

export default InProgress;
