import avatar from "../Media/sidekick-avatar.svg";
import { styled } from "styled-components";

const ChatBubbleContainer = styled.div`
  .chat-bubble-wrap {
    display: flex;
    color: white;
    align-items: center;
    margin-top: 30px;
  }

  .chat-bubble {
    background: #007bff;
    color: white;
    width: fit-content;
    min-height: 59px;
    padding-left: 11px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 2em;
  }

  .chat-bubble-animation {
    animation: chat-bubble-scale 0.5s ease-in-out forwards;
    transform-origin: left center;
    animation-delay: 1s;
  }

  .avatar {
    margin-right: 10px;
    align-self: flex-start;
  }

  .time {
    margin-left: 25px;
    margin-right: 25px;
    font-weight: bold;
    font-size: 13px;
  }

  .chat-content-wrap {
    background: pink;
    display: flex;
    flex-direction: column;
  }
`;

const ChatBubbleDefault = ({ log }) => {
  return (
    <>
      <ChatBubbleContainer className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div className="chat-bubble">
            <img src={avatar} className="avatar" />
            {log.message}
          </div>
          <p className="time">10:30</p>
        </div>
      </ChatBubbleContainer>
    </>
  );
};

export default ChatBubbleDefault;
