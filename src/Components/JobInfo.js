import "./JobInfo.scss";
import Start from "./Start";
import { useState } from "react";
import InProgress from "./InProgress";
import Pause from "./Pause";
import Resume from "./Resume";
import ProgressLevel from "./ProgressLevel";

const JobInfo = ({ currentStatus, setCurrentStatus }) => {
  const [currentAction, setCurrentAction] = useState("start");
  const [isHovered, setIsHovered] = useState(false);

  const [hover, setHover] = useState("");
  const [showPlay, setShowPlay] = useState(false);

  const changeStatus = (status) => {
    setCurrentAction(status);
  };

  return (
    <div className="JobInfo">
      <div>
        <h1>Web enquiry: 209735</h1>
        <p>Jones and Son Logistics</p>
        <p>Simon Jones</p>

        <p>Enquiry added 2 mins ago</p>
      </div>

      {currentAction === "start" && (
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
    </div>
  );
};

export default JobInfo;
