import "./Log.scss";
import ChatBubbleTypewriter from "./ChatBubbleTypewriter";
import Typewriter from "typewriter-effect";
import { useRef, useEffect, useState } from "react";
import ChatBubbleDefault from "./ChatBubbleDefault";

const Log = ({
  heading_bold,
  heading_light,
  array,
  displayDetails,
  modalRef,
  highlightedLog,
  logName,
  stepsRef,
}) => {
  const logRef = useRef();

  useEffect(() => {
    if (logRef.current) {
      const modal = logRef.current.closest(".modal");
      const stepsHeight = stepsRef.current.offsetHeight;
      const targetPosition = logRef.current.offsetTop - stepsHeight - 50;

      modal.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="Log"
      ref={logRef}
      style={{
        border: highlightedLog === logName && "dashed 1px rgb(71, 159, 109)",
      }}
    >
      <div className="content">

        <div className="log-header">
        <h2 className="heading-bold">
          {heading_bold} <span className="heading-light">{heading_light}</span>
        </h2>

        <p
          className="show-hide"
          onClick={() => (showDetails ? setShowDetails(false) : setShowDetails(true))}
        >
          {showDetails ? "Hide details" : "Show details"}
        </p>
        </div>

        <div className="chat-bubble-container">
          {array
            .filter((log) => log.complete)
            .map((log) => (
              <ChatBubbleDefault
                key={log.id}
                log={log}
                displayDetails={displayDetails}
                showDetails={showDetails}
              />
            ))}

          {array
            .filter((log) => log.complete == false)
            .map((log) => (
              <ChatBubbleTypewriter
                key={log.id}
                log={log}
                displayDetails={displayDetails}
                message={log.message}
                showDetails={showDetails}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Log;
