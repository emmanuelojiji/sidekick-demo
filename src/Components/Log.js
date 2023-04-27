import "./Log.scss";
import ChatBubble from "./ChatBubble";
import Typewriter from "typewriter-effect";
import { useRef, useEffect } from "react";


const Log = ({ heading, array, displayDetails, modalRef }) => {
  /*const objectToArray = () => {
  const tasksArray = object.keys(enquiry)
  }*/


  return (
    <div className="Log">
      <div className="content">
        <h2>{heading}</h2>
        <div className="chat-bubble-container">
          {array.map((log) => (
            <ChatBubble log={log} displayDetails={displayDetails}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Log;
