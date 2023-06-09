import avatar from "../Media/sidekick-avatar.svg";
import { styled } from "styled-components";

const ChatBubbleContainer = styled.div`
  transform: scale(0);
  opacity: 0;
  max-height: 0px;

  animation: chat-bubble-scale 0.5s ease-in-out forwards;
  transform-origin: left center;
  animation-delay: 1s;

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

  .chat-bubble-wrap {
    display: flex;
    color: white;
    align-items: center;
    margin-top: 30px;
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

  @keyframes chat-bubble-scale {
    0% {
      transform: scale(0);
      max-height: 0;
      opacity: 0;
    }

    100% {
      transform: scale(1);
      max-height: 5000px;
      opacity: 1;
    }
  }
`;

const ChatBubbleTypewriter = ({ message }) => {
  return (
    <>
      <ChatBubbleContainer className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div className="chat-bubble">
            <img src={avatar} className="avatar" />
            {message}
          </div>
          <p className="time">10:30</p>
        </div>
      </ChatBubbleContainer>
    </>
  );
};

export default ChatBubbleTypewriter;
