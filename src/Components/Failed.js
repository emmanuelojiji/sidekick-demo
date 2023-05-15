import icon from "../Media/icon-failed.svg";
import { styled } from "styled-components";

const FailedContainer = styled.div`
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
    background: #b40000;
  }
`;

const Failed = ({ onMouseEnter }) => {
  return (
    <FailedContainer>
      <div className="status-icon-container" onMouseEnter={onMouseEnter}>
        <img src={icon} className="failed-icon" />
      </div>
      <p>Error</p>
    </FailedContainer>
  );
};

export default Failed;
