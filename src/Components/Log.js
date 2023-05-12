import ChatBubbleTypewriter from "./ChatBubbleTypewriter";
import { useRef, useEffect, useState } from "react";
import ChatBubbleDefault from "./ChatBubbleDefault";
import { styled } from "styled-components";

const LogContainer = styled.div`
  width: 100%;
  background: #08101a;
  border-radius: 40px;
  border: dashed 1px #374250;
  margin-bottom: 54px;
  transition: 0.5s ease-in-out;

  animation: open 3s linear forwards;

  h2 {
    color: white;
  }

  .log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .content {
    animation: fade-in 1s forwards;
    opacity: 0;
    visibility: hidden;
    padding: 50px;
  }

  .chat-bubble-container {
    display: flex;
    flex-direction: column-reverse;
  }

  @keyframes open {
    0% {
      opacity: 0;
      max-height: 0;
    }

    100% {
      opacity: 1;
      max-height: 5000px;
    }
  }

  @keyframes fade-in {
    0% {
      visibility: hidden;
      opacity: 0;
    }

    100% {
      visibility: visible;
      opacity: 1;
    }
  }

  .heading-light {
    font-weight: 100;
  }

  .show-hide {
    color: #007bff;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #003e80;
    }
  }

  .details {
    max-height: 0px;
    background: #2a313a;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out;
    color: #dadada;
    overflow-y: scroll;
    font-size: 15px;
    color: #bdbdbd;
    margin-bottom: 20px;

    .details-wrap {
      padding: 20px;
    }

    &:empty {
      display: none;
    }
  }

  .details-expand {
    max-height: 170px;
  }

  .details-collapse {
    max-height: 0px;
  }

  .details-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .details-row-right {
    display: flex;
  }
`;

const Log = ({
  heading_bold,
  heading_light,
  array,
  displayDetails,
  highlightedLog,
  logName,
  stepsRef,
  borderRadius
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
    <LogContainer
      className="Log"
      ref={logRef}
      style={{
        border: highlightedLog === logName && "dashed 1px rgb(71, 159, 109)",
      }}
    >
      <div className="content">
        <div className="log-header">
          <h2 className="heading-bold">
            {heading_bold}{" "}
            <span className="heading-light">{heading_light}</span>
          </h2>

          <p
            className="show-hide"
            onClick={() =>
              showDetails ? setShowDetails(false) : setShowDetails(true)
            }
          >
            {showDetails ? "Hide details" : "Show details"}
          </p>
        </div>

        <div
          className={`details ${
            showDetails ? "details-expand" : "details-collapse"
          }`}
          style={{
            display: displayDetails,
            marginTop: showDetails && "30px",
          }}
        >
          <div className="details-wrap">
            {array.map((log) => (
              <div key={log.message}>
                {log.events.map((event, index) => (
                  <div className="details-row" key={index}>
                    <p>{event}</p>
                    <div className="details-row-right">
                      <p>{event.time}</p>
                      <p>{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
    </LogContainer>
  );
};

export default Log;
