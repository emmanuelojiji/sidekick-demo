import "./App.scss";
import JobInfo from "./Components/JobInfo";
import ProgressLevel from "./Components/ProgressLevel";
import { useEffect, useState } from "react";
import Log from "./Components/Log";
import ChatBubble from "./Components/ChatBubble";
import { qualify_web_enquiry_log } from "./Components/Logs";
import { find_suppliers_log } from "./Components/Logs";

function App() {
  const [currentStatus, setCurrentStatus] = useState(0);

  const [qualifyWebEnquiryLog, setQualifyWebEnquiryLog] = useState(
    qualify_web_enquiry_log
  );

  useEffect(() => {
    setTimeout(() => {
      setQualifyWebEnquiryLog([
        ...qualifyWebEnquiryLog,
        {
          message: "I have created this enquiry based on web enquiry 209735",

          tasks: [
            {
              name: "Starting task",
              time: "10:30",
              date: "07-04-2023",
            },
            {
              name: "Checking if SideKick is assigned to this enquiry",
              time: "10:30",
              date: "07-04-2023",
            },
            {
              name: "Finding suppliers for part 434425r4",
              time: "10:30",
              date: "07-04-2023",
            },
            {
              name: "Founding 29 possible suppliers for part 443r32r234",
              time: "10:30",
              date: "07-04-2023",
            },
            {
              name: "Checking supplier eBay - check notes for part 447463232",
              time: "10:30",
              date: "07-04-2023",
            },
          ],
        },
      ]);
    }, 3000);
  }, []);

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
          <Log heading="Find suppliers" array={find_suppliers_log}></Log>
        )}

        {currentStatus > 2 && (
          <Log heading="Update buying lines" array={find_suppliers_log}></Log>
        )}

        {currentStatus > 3 && (
          <Log
            heading="Calculate selling prices"
            array={find_suppliers_log}
          ></Log>
        )}

        {currentStatus > 4 && (
          <Log
            heading="Assemble email details"
            array={find_suppliers_log}
          ></Log>
        )}

        {currentStatus > 5 && (
          <Log
            heading="Generate customer email"
            array={find_suppliers_log}
          ></Log>
        )}

        {currentStatus > 6 && (
          <Log heading="Send customer email" array={find_suppliers_log}></Log>
        )}
      </div>
    </div>
  );
}

export default App;
