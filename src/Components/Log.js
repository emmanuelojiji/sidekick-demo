import "./Log.scss";
import ChatBubble from "./ChatBubble";
import Typewriter from "typewriter-effect";

const Log = ({ heading, array, displayDetails }) => {
  return (
    <div className="Log">
      <div className="content">
        <h2>{heading}</h2>
        {array.map((log) => (
          <ChatBubble
            displayDetails={displayDetails}
            message={
              <Typewriter
                options={{
                  strings: log.message,
                  autoStart: true,
                  loop: false,
                  cursor: "",
                  delay: 50
                }}
              />
            }
            details={log.tasks.map((task) => (
              <p>{task}</p>
            ))}
          />
        ))}
      </div>
    </div>
  );
};

export default Log;
