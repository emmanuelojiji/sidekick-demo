import Start from "./Start";
import { useState } from "react";
import InProgress from "./InProgress";
import Pause from "./Pause";
import Resume from "./Resume";
import Complete from "./Complete";
import { styled } from "styled-components";

const JobInfoContainer = styled.div`
  height: 230px;
  width: 100%;
  background: #2f3640;
  color: white;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 40px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  .cog {
    min-height: 94x;
    min-width: 94px;
    max-height: 94px;
    max-width: 94px;
    background: #007bff;
    border-radius: 100%;
  }

  h1 {
    margin-bottom: 15px;
    font-size: 24px;
  }

  .company-info {
    color: #798a9f;
    margin-bottom: 5px;
  }

  .enquiry-added {
    color: #cf671b;
    margin-top: auto;
  }

  .job-info-left {
    display: flex;
    flex-direction: column;
  }
}


`;

const JobInfo = ({ currentStatus, setCurrentStatus, jobNumber }) => {
  const [currentAction, setCurrentAction] = useState("start");

  const [hover, setHover] = useState("");

  const changeStatus = (status) => {
    setCurrentAction(status);
  };

  return (
    <JobInfoContainer>
      <div className="job-info-left">
        <h1>
          Web enquiry: <span className="light">{jobNumber}</span>
        </h1>
        <p className="company-info">Jones and Son Logistics</p>
        <p className="company-info">Simon Jones</p>

        <p className="enquiry-added">Enquiry added 2 mins ago</p>
      </div>

      {currentAction === "start" && currentStatus < 7 && (
        <Start
          onClick={(e) => {
            changeStatus("in_progress");
            e.stopPropagation();
            setCurrentStatus(currentStatus + 1);
          }}
        />
      )}

      {currentAction === "in_progress" && currentStatus < 7 && !hover && (
        <InProgress onMouseEnter={() => setHover("pause")} />
      )}

      {hover === "pause" && (
        <Pause
          onMouseLeave={() => setHover("")}
          onClick={() => setCurrentAction("pause")}
        />
      )}

      {currentAction === "pause" && currentStatus != 6 && !hover && (
        <Pause
          onClick={() => setCurrentAction("in_progress")}
          onMouseEnter={() => setHover("play")}
        />
      )}

      {hover === "play" && (
        <Resume
          onMouseLeave={() => setHover("")}
          onClick={() => {
            setCurrentAction("in_progress");
            setHover("");
          }}
        />
      )}

      {currentStatus > 6 && <Complete />}
    </JobInfoContainer>
  );
};

export default JobInfo;
