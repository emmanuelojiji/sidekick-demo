import "./App.scss";
import JobInfo from "./Components/JobInfo";
import ProgressLevel from "./Components/ProgressLevel";
import { useState } from "react";
import Log from "./Components/Log";
import ChatBubble from "./Components/ChatBubble";
import { qualify_web_enquiry_log } from "./Components/Logs";
import { find_suppliers_log } from "./Components/Logs";

function App() {
  const [currentStatus, setCurrentStatus] = useState(0);

  const [qualifyWebEnquiryLog, setQualifyWebEnquiryLog] = useState(
    qualify_web_enquiry_log
  );

  return (
    <div className="App">
      <div
        className="modal"
        onClick={() => {
          setCurrentStatus(currentStatus + 1);
        }}
      >
        <JobInfo
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
        />

        <div className="progress-level-container">
          <div className="progress-bar"></div>
          <ProgressLevel
            heading="Qualify"
            subheading="web enquiry"
            background={currentStatus > 0 && "#479f6d"}
          />
          <ProgressLevel
            heading="Find"
            subheading="suppliers"
            background={currentStatus > 1 && "#479f6d"}
          />
          <ProgressLevel
            heading="Update"
            subheading="buying lines"
            background={currentStatus > 2 && "#479f6d"}
          />
          <ProgressLevel
            heading="Calculate"
            subheading="selling prices"
            background={currentStatus > 3 && "#479f6d"}
          />
          <ProgressLevel
            heading="Assemble"
            subheading="Email Details"
            background={currentStatus > 4 && "#479f6d"}
          />
          <ProgressLevel
            heading="Generate"
            subheading="customer email"
            background={currentStatus > 5 && "#479f6d"}
          />
          <ProgressLevel
            heading="Send"
            subheading="customer email"
            background={currentStatus > 6 && "#479f6d"}
          />
        </div>

        {currentStatus > 0 && (
          <Log heading="Qualify web enquiry" array={qualifyWebEnquiryLog}></Log>
        )}

        {currentStatus > 1 && (
          <Log
            heading="Find suppliers"
            array={find_suppliers_log}
            displayDetails="none"
          ></Log>
        )}
      </div>
    </div>
  );
}

export default App;
