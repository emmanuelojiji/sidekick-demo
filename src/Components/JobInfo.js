import "./JobInfo.scss";
import Start from "./Start";
import { useState } from "react";
import InProgress from "./InProgress";
import Pause from "./Pause";
import Resume from "./Resume";
import Complete from "./Complete";

import ProgressLevel from "./Step";

const JobInfo = ({ currentStatus, setCurrentStatus, jobNumber }) => {
  const [currentAction, setCurrentAction] = useState("start");
  const [isHovered, setIsHovered] = useState(false);

  const [hover, setHover] = useState("");
  const [showPlay, setShowPlay] = useState(false);

  const changeStatus = (status) => {
    setCurrentAction(status);
  };

  return (
    <div className="JobInfo">
      <div className="job-info-left">
        <h1>
          Web enquiry: <span className="light">{jobNumber}</span>
        </h1>
        <p className="company-info">Jones and Son Logistics</p>
        <p className="company-info">Simon Jones</p>

        <p className="enquiry-added">Enquiry added 2 mins ago</p>
      </div>

      {currentAction === "start" && currentStatus < 6 && (
        <Start
          onClick={(e) => {
            changeStatus("in_progress");
            e.stopPropagation();
            setCurrentStatus(currentStatus + 1);
          }}
        />
      )}

      {currentAction === "in_progress" && !hover && (
        <InProgress onMouseEnter={() => setHover("pause")} />
      )}

      {hover === "pause" && (
        <Pause
          onMouseLeave={() => setHover("")}
          onClick={() => setCurrentAction("pause")}
        />
      )}

      {currentAction === "pause" && !hover && (
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
    </div>
  );
};

export default JobInfo;
