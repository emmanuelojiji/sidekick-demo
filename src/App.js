import "./App.scss";
import JobInfo from "./Components/JobInfo";
import ProgressLevel from "./Components/Step";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Log from "./Components/Log";
import ChatBubble from "./Components/ChatBubbleTypewriter";
import { qualify_web_enquiry_log } from "./Components/logs_qualify_web_enquiry";
import { find_suppliers_log } from "./Components/logs_find_suppliers";
import { update_buying_lines_log } from "./Components/logs_update_buying_lines";
import { calculate_selling_prices_log } from "./Components/logs_calculate_selling_prices";
import { assemble_email_details_log } from "./Components/logs_assemble_email_details";
import { send_customer_email_log } from "./Components/logs_send_customer_email";
import Step from "./Components/Step";
import Header from "./Components/Header";
import { generate_customer_email_log } from "./Components/logs_generate_customer_email";

function App() {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [highlightedLog, setHighlightedLog] = useState("");

  const scrollToLog = (logRef, logName) => {
    if (logRef.current) {
      logRef.current.scrollIntoView({
        behavior: 'smooth', block: 'center'
      });

      setTimeout(() => {
        setHighlightedLog(logName);
      }, 200);
    }
  };

  const logRefs = {
    qualifyWebEnquiryRef: useRef(),
    findSuppliers: useRef(),
    updateBuyingLines: useRef(),
    calculateSellingPrices: useRef(),
    assembleEmailDetails: useRef(),
    generateCustomerEmail: useRef(),
    sendCustomerEmail: useRef(),
  };

  return (
    <div className="App">
      <div
        className="modal"
        onClick={() => {
          setCurrentStatus(currentStatus + 1);
        }}
      >
        <Header />
        <div className="modal-content">
          <JobInfo
            currentStatus={currentStatus}
            setCurrentStatus={setCurrentStatus}
            jobNumber="209735"
          />

          <div className="step-container">
            <div className="progress-bar"></div>
            <Step
              onClick={() =>
                scrollToLog(logRefs.qualifyWebEnquiryRef, "qualify_web_enquiry")
              }
              heading="Qualify"
              subheading="web enquiry"
              background={currentStatus > 0 && "#479f6d"}
              cursor={currentStatus > 0 && "pointer"}
              showTick={currentStatus > 0 && "tick-fade-in"}
              icon={
                <svg
                  width="31"
                  height="50"
                  viewBox="0 0 31 31"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke={currentStatus > 0 ? "white" : "#6c7682"}
                    stroke-width="1.346"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                  >
                    <path d="M5.707 12.64v15.728c0 .733-.606 1.327-1.353 1.327h-3C.606 29.695 0 29.1 0 28.368V12.64c0-.732.606-1.326 1.354-1.326h3c.747 0 1.353.594 1.353 1.326zM28.154 15.9c1.418 0 2.568 1.127 2.568 2.517s-1.15 2.516-2.568 2.516h-2.879M27.149 20.933c1.418 0 2.568 1.127 2.568 2.517h0c0 1.39-1.15 2.517-2.568 2.517H24.27M5.707 12.397c1.735-.11 3.384-.887 4.453-2.24 1.996-2.525 2.24-5.723 2.876-8.178.623-2.399 4.15-2.713 5.084-.413.899 2.214.347 5.307-.962 8.51-.154.378.12.79.535.79h10.739c1.418 0 2.568 1.128 2.568 2.517h0c0 1.39-1.15 2.517-2.568 2.517h-2.846M26.144 25.967c1.419 0 2.568 1.126 2.568 2.516 0 1.39-1.15 2.517-2.568 2.517H13.39c-2.974-.253-4.702-2.416-7.306-2.416" />
                  </g>
                </svg>
              }
            />

            <Step
              onClick={() =>
                scrollToLog(logRefs.findSuppliers, "find_suppliers")
              }
              heading="Find"
              subheading="suppliers"
              background={currentStatus > 1 && "#479f6d"}
              cursor={currentStatus > 1 && "pointer"}
              showTick={currentStatus > 1 && "tick-fade-in"}
              icon={
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke={currentStatus > 1 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="l63djzkx9a" d="M0 0h33v30H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g>
                      <mask id="imy8nf2e8b" fill="#fff">
                        <use xlinkHref="#l63djzkx9a" />
                      </mask>
                      <path
                        d="M5.316 21.564c-4.9-4.04-5.612-11.304-1.59-16.226a11.438 11.438 0 0 1 8.88-4.214c2.562 0 5.14.857 7.276 2.617 4.203 3.466 5.314 9.303 3.006 14a10.281 10.281 0 0 1-.554.998c-.26.421-.541.835-.863 1.228a11.6 11.6 0 0 1-1.446 1.475c-.144.126-.292.247-.443.363a11.445 11.445 0 0 1-6.99 2.376c-2.563 0-5.14-.857-7.276-2.617m24.856 7.312a.689.689 0 0 1-.44-.158l-8.413-6.935c.357-.346.698-.712 1.016-1.103.32-.39.606-.802.873-1.22l8.418 6.94a.688.688 0 0 1 .25.47.688.688 0 0 1-.154.51l-1.012 1.24a.69.69 0 0 1-.538.256m2.819-2.115a1.82 1.82 0 0 0-.655-1.23l-8.557-7.054a12.597 12.597 0 0 0 1.356-7.063 12.584 12.584 0 0 0-4.544-8.541A12.585 12.585 0 0 0 12.605 0a12.54 12.54 0 0 0-9.744 4.625 12.609 12.609 0 0 0-2.8 9.266 12.59 12.59 0 0 0 4.545 8.542 12.588 12.588 0 0 0 7.987 2.872c2.9 0 5.66-.99 7.873-2.771l8.556 7.053a1.811 1.811 0 0 0 2.553-.252l1.012-1.242c.308-.375.452-.848.404-1.332"
                        fill="#6C7682"
                        mask="url(#imy8nf2e8b)"
                      />
                    </g>
                    <path
                      d="M12.593 21.677a8.924 8.924 0 0 1-5.695-2.05c-3.836-3.16-4.392-8.847-1.244-12.7a8.95 8.95 0 0 1 6.95-3.298c2.006 0 4.024.671 5.695 2.048 3.133 2.583 4.076 6.85 2.6 10.425a10.259 10.259 0 0 1-.512 1.032c-.245.43-.52.849-.843 1.244a9.007 9.007 0 0 1-1.055 1.071c-.142.126-.282.257-.43.372-.157.12-.32.223-.483.331a8.961 8.961 0 0 1-4.983 1.525m8.23-4.184c.097-.164.194-.329.28-.497.086-.173.166-.35.242-.526 1.655-3.828.676-8.451-2.691-11.227a9.536 9.536 0 0 0-6.05-2.177A9.498 9.498 0 0 0 5.22 6.57c-3.339 4.085-2.746 10.138 1.322 13.492a9.536 9.536 0 0 0 6.05 2.177 9.476 9.476 0 0 0 5.434-1.717c.159-.111.32-.216.473-.338.148-.116.286-.248.427-.374a9.61 9.61 0 0 0 1.049-1.076c.323-.396.598-.813.847-1.242"
                      fill="#6C7682"
                    />
                    <path
                      d="M19.037 10.108a.28.28 0 0 0 .263.185l.096-.017a.282.282 0 0 0 .167-.36 6.86 6.86 0 0 0-3.556-3.905 6.808 6.808 0 0 0-5.265-.236.282.282 0 0 0-.167.36.28.28 0 0 0 .358.168c.094-.034.188-.058.281-.087a6.253 6.253 0 0 1 4.556.304 6.296 6.296 0 0 1 3.154 3.315c.036.091.08.18.113.273"
                      fill="#6C7682"
                    />
                  </g>
                </svg>
              }
            />
            <Step
              onClick={() =>
                scrollToLog(logRefs.updateBuyingLines, "update_buying_lines")
              }
              heading="Update"
              subheading="buying lines"
              background={currentStatus > 2 && "#479f6d"}
              cursor={currentStatus > 2 && "pointer"}
              showTick={currentStatus > 2 && "tick-fade-in"}
              icon={
                <svg
                  width="37"
                  height="50"
                  viewBox="0 0 37 29"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke={currentStatus > 2 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="9lfy8tcdoa" d="M0 0h7.493v6.386H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M3.773 14.5c0 5.366 2.962 10.05 7.364 12.557M23.716.938a15.01 15.01 0 0 0-2.473-.683 14.888 14.888 0 0 0-7.603.558M33.235 14.5c0-5.366-2.962-10.051-7.366-12.558"
                      stroke={currentStatus > 2 ? "white" : "#6c7682"}
                      stroke-width="2.073"
                    />
                    <path
                      d="m10.743.977 1.029 1.802a13.71 13.71 0 0 0-1.966 1.326 13.506 13.506 0 0 0-1.7 1.639 1.062 1.062 0 0 1-1.48.117 1.022 1.022 0 0 1-.118-1.457A15.6 15.6 0 0 1 8.47 2.511 15.854 15.854 0 0 1 10.743.977M25.235 26.223a13.71 13.71 0 0 0 1.968-1.327 13.51 13.51 0 0 0 1.7-1.64 1.062 1.062 0 0 1 1.48-.118c.442.37.495 1.022.12 1.457a15.6 15.6 0 0 1-1.964 1.895 15.85 15.85 0 0 1-2.275 1.534l-1.03-1.801z"
                      fill={currentStatus > 2 ? "white" : "#6c7682"}
                    />
                    <path
                      d="M13.292 28.062c.79.293 1.616.523 2.473.683 2.637.49 5.243.257 7.605-.559"
                      stroke={currentStatus > 2 ? "white" : "#6c7682"}
                      stroke-width="2.073"
                    />
                    <path
                      fill={currentStatus > 2 ? "white" : "#6c7682"}
                      d="M3.747 8.114 7.493 14.5H0z"
                    />
                    <g transform="translate(29.507 14.486)">
                      <mask id="40n97zembb" fill="#fff"></mask>
                      <path
                        fill={currentStatus > 2 ? "white" : "#6c7682"}
                        mask="url(#40n97zembb)"
                        d="M3.747 6.386 7.493 0H0z"
                      />
                    </g>
                  </g>
                </svg>
              }
            />
            <Step
              onClick={() =>
                scrollToLog(
                  logRefs.calculateSellingPrices,
                  "calculate_selling_prices"
                )
              }
              heading="Calculate"
              subheading="selling prices"
              background={currentStatus > 3 && "#479f6d"}
              cursor={currentStatus > 3 && "pointer"}
              showTick={currentStatus > 3 && "tick-fade-in"}
              icon={
                <svg
                  width="26"
                  height="31"
                  viewBox="0 0 26 31"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke={currentStatus > 3 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="e80zpdgg4a" d="M0 0h26v31H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g>
                      <mask id="w55yljvinb" fill="#fff">
                        <use xlinkHref="#e80zpdgg4a" />
                      </mask>
                      <path
                        d="M24.839 28.571c0 .714-.595 1.294-1.326 1.294H2.486c-.73 0-1.325-.58-1.325-1.294V2.428c0-.713.595-1.294 1.325-1.294h21.027c.731 0 1.326.58 1.326 1.294v26.143zM23.513 0H2.486C1.116 0 0 1.09 0 2.43V28.57C0 29.91 1.116 31 2.486 31h21.027C24.884 31 26 29.91 26 28.571V2.428C26 1.09 24.884 0 23.513 0z"
                        fill="#6C7682"
                        mask="url(#w55yljvinb)"
                      />
                    </g>
                    <path
                      d="M22.566 8.503a.447.447 0 0 1-.452.441H3.886a.447.447 0 0 1-.452-.441V4.24c0-.243.202-.442.452-.442h18.228c.25 0 .452.2.452.442v4.263zm-.452-5.272H3.886c-.57 0-1.033.452-1.033 1.009v4.263c0 .556.463 1.01 1.033 1.01h18.228c.57 0 1.032-.454 1.032-1.01V4.24a1.02 1.02 0 0 0-1.032-1.009zM7.41 14.192a.671.671 0 0 1-.677.663H4.617a.671.671 0 0 1-.678-.663v-1.297c0-.365.305-.662.678-.662h2.116c.373 0 .678.297.678.662v1.297zm-.677-2.526H4.617c-.693 0-1.258.552-1.258 1.23v1.296c0 .678.565 1.23 1.258 1.23h2.116c.693 0 1.259-.552 1.259-1.23v-1.297c0-.677-.566-1.229-1.26-1.229zM14.735 14.192a.671.671 0 0 1-.678.663h-2.115a.67.67 0 0 1-.677-.663v-1.297a.67.67 0 0 1 .677-.662h2.115c.374 0 .678.297.678.662v1.297zm-.678-2.526h-2.115c-.694 0-1.258.552-1.258 1.23v1.296c0 .678.564 1.23 1.258 1.23h2.115c.694 0 1.26-.552 1.26-1.23v-1.297c0-.677-.566-1.229-1.26-1.229zM22.06 14.192a.671.671 0 0 1-.679.663h-2.113a.671.671 0 0 1-.678-.663v-1.297c0-.365.304-.662.678-.662h2.113c.374 0 .679.297.679.662v1.297zm-.679-2.526h-2.113c-.694 0-1.26.552-1.26 1.23v1.296c0 .678.566 1.23 1.26 1.23h2.113c.694 0 1.26-.552 1.26-1.23v-1.297c0-.677-.566-1.229-1.26-1.229zM7.41 20.439a.671.671 0 0 1-.677.662H4.617a.671.671 0 0 1-.678-.662v-1.297c0-.365.305-.663.678-.663h2.116c.373 0 .678.298.678.663v1.297zm-.677-2.526H4.617c-.693 0-1.258.551-1.258 1.229v1.297c0 .677.565 1.23 1.258 1.23h2.116c.693 0 1.259-.553 1.259-1.23v-1.297c0-.678-.566-1.23-1.26-1.23zM14.735 20.439a.671.671 0 0 1-.678.662h-2.115a.67.67 0 0 1-.677-.662v-1.297a.67.67 0 0 1 .677-.663h2.115c.374 0 .678.298.678.663v1.297zm-.678-2.526h-2.115c-.694 0-1.258.551-1.258 1.229v1.297c0 .677.564 1.23 1.258 1.23h2.115c.694 0 1.26-.553 1.26-1.23v-1.297c0-.678-.566-1.23-1.26-1.23zM7.41 26.685a.671.671 0 0 1-.677.662H4.617a.671.671 0 0 1-.678-.662v-1.297c0-.365.305-.662.678-.662h2.116c.373 0 .678.297.678.662v1.297zm-.677-2.526H4.617c-.693 0-1.258.551-1.258 1.23v1.296c0 .678.565 1.23 1.258 1.23h2.116c.693 0 1.259-.552 1.259-1.23v-1.297c0-.678-.566-1.229-1.26-1.229zM14.735 26.685a.671.671 0 0 1-.678.662h-2.115a.67.67 0 0 1-.677-.662v-1.297a.67.67 0 0 1 .677-.662h2.115c.374 0 .678.297.678.662v1.297zm-.678-2.526h-2.115c-.694 0-1.258.551-1.258 1.23v1.296c0 .678.564 1.23 1.258 1.23h2.115c.694 0 1.26-.552 1.26-1.23v-1.297c0-.678-.566-1.229-1.26-1.229zM22.06 26.722a.671.671 0 0 1-.679.663h-2.113a.671.671 0 0 1-.678-.663v-7.58c0-.365.304-.663.678-.663h2.113c.374 0 .679.298.679.663v7.58zm-.679-8.81h-2.113c-.694 0-1.26.552-1.26 1.23v7.58c0 .678.566 1.23 1.26 1.23h2.113c.694 0 1.26-.552 1.26-1.23v-7.58c0-.678-.566-1.23-1.26-1.23z"
                      fill="#6C7682"
                    />
                  </g>
                </svg>
              }
            />
            <Step
              onClick={() =>
                scrollToLog(
                  logRefs.assembleEmailDetails,
                  "assemble_email_details"
                )
              }
              heading="Assemble"
              subheading="Email Details"
              background={currentStatus > 4 && "#479f6d"}
              cursor={currentStatus > 4 && "pointer"}
              showTick={currentStatus > 4 && "tick-fade-in"}
              icon={
                <svg
                  width="25"
                  height="33"
                  viewBox="0 0 25 33"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke={currentStatus > 4 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="695oa84y3a" d="M0 0h25v33H0z" />
                    <path id="epf5nktbfc" d="M0 33h25V0H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="nw4pbq1rtb" fill="#fff">
                      <use xlinkHref="#695oa84y3a" />
                    </mask>
                    <path
                      d="M23.908 27.941c0 2.151-1.639 3.897-3.657 3.897H4.749c-2.02 0-3.658-1.746-3.658-3.897V5.056c0-2.146 1.639-3.897 3.658-3.897H20.25c2.018 0 3.657 1.75 3.657 3.897V27.94zM20.251-.004H4.749c-2.619 0-4.75 2.27-4.75 5.06V27.94c0 2.79 2.131 5.06 4.75 5.06H20.25C22.869 33 25 30.73 25 27.94V5.056c0-2.79-2.131-5.06-4.75-5.06z"
                      fill="#6C7682"
                      mask="url(#nw4pbq1rtb)"
                    />
                    <mask id="ful06dayqd" fill="#fff">
                      <use xlinkHref="#epf5nktbfc" />
                    </mask>
                    <path
                      fill="#6C7682"
                      mask="url(#ful06dayqd)"
                      d="M4.56 26.451h15.898V25.29H4.56zM4.56 22.256h15.898v-1.163H4.56zM4.542 18.06h15.916v-1.162H4.542zM4.542 13.865h15.916v-1.163H4.542zM4.542 9.669h15.916V8.506H4.542z"
                    />
                  </g>
                </svg>
              }
            />
            <Step
              onClick={() =>
                scrollToLog(
                  logRefs.generateCustomerEmail,
                  "generate_customer_email"
                )
              }
              heading="Generate"
              subheading="customer email"
              background={currentStatus > 5 && "#479f6d"}
              cursor={currentStatus > 5 && "pointer"}
              showTick={currentStatus > 5 && "tick-fade-in"}
              icon={
                <svg
                  width="33"
                  height="24"
                  viewBox="0 0 33 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke={currentStatus > 5 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="ehsdf4py7a" d="M0 0h33v24H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="on2zc4rgfb" fill="#fff">
                      <use xlinkHref="#ehsdf4py7a" />
                    </mask>
                    <path
                      d="m20.889 11.969 11.024-7.747v15.495L20.89 11.97zm-8.778 0L1.087 19.717V4.222l11.024 7.747zM1.087 2.296c0-.674.556-1.223 1.24-1.223h28.347c.683 0 1.24.549 1.24 1.223v.61l-.563.394-11.398 8.01-.47.33-.467.329-.74.52a3.094 3.094 0 0 1-3.551 0l-.74-.52-.47-.33-.468-.329L1.65 3.3l-.562-.396v-.608zm30.826 19.407c0 .676-.556 1.225-1.24 1.225H2.328c-.684 0-1.24-.55-1.24-1.225v-.67l.562-.395 11.398-8.01 1.047.734c.72.506 1.562.76 2.407.76.842 0 1.685-.254 2.405-.76l1.047-.734 11.398 8.01.562.395v.67zM30.673 0H2.328C1.044 0 0 1.03 0 2.296v19.407C0 22.97 1.044 24 2.327 24h28.347C31.956 24 33 22.97 33 21.703V2.296C33 1.03 31.956 0 30.674 0z"
                      fill="#6C7682"
                      mask="url(#on2zc4rgfb)"
                    />
                  </g>
                </svg>
              }
            />
            <Step
              onClick={() =>
                scrollToLog(logRefs.sendCustomerEmail, "send_customer_email")
              }
              heading="Send"
              subheading="customer email"
              background={currentStatus > 6 && "#479f6d"}
              cursor={currentStatus > 6 && "pointer"}
              showTick={currentStatus > 6 && "tick-fade-in"}
              icon={
                <svg
                  width="26"
                  height="35"
                  viewBox="0 0 26 35"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke={currentStatus > 6 ? "white" : "#6c7682"}
                >
                  <defs>
                    <path id="7cas2kw4pa" d="M0 0h26v35H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="p7dwhoyryb" fill="#fff">
                      <use xlinkHref="#7cas2kw4pa" />
                    </mask>
                    <path
                      d="M24.178 27.093c-.578 2.42-1.872 4.286-3.745 5.393-1.465.867-3.225 1.325-5.095 1.325-.408 0-.82-.023-1.223-.067-.841-.094-1.913-.269-2.744-.804-.66-.425-1.24-1.064-1.824-2.008-.6-.973-1.12-2.149-1.508-3.403-.082-.267-.15-.543-.217-.82-.218-.877-.442-1.783-1.092-2.548l-5.148-6.037a1.715 1.715 0 0 1-.383-1.32c.065-.481.321-.898.721-1.177.69-.479 1.745-.295 2.32.39l2.972 3.447v1.775a.594.594 0 1 0 1.185 0v-2.367c.04-1.206.04-4.785-.005-15.984 0-.937.76-1.7 1.692-1.7l.092.003c.853.044 1.601.898 1.601 1.826v13.679a.593.593 0 1 0 1.185 0v-5.524c.353-.57.991-.89 1.672-.79.824.117 1.444.882 1.444 1.777V17.506a.594.594 0 1 0 1.185 0V13a1.688 1.688 0 0 1 1.558-1.072l.092.003c.882.045 1.601.859 1.601 1.81V18.405a.594.594 0 1 0 1.185 0v-4.051a1.672 1.672 0 0 1 1.424-.822c.933 0 1.692.763 1.692 1.689l-.101 5.967c-.032 1.85-.068 3.947-.536 5.905m-1.055-14.75c-.567 0-1.107.168-1.564.47-.358-1.155-1.366-2.006-2.585-2.07a2.876 2.876 0 0 0-1.835.548c-.319-1.086-1.218-1.926-2.338-2.087-.666-.095-1.3.04-1.84.353v-6.54c0-1.556-1.247-2.936-2.723-3.014a2.893 2.893 0 0 0-3.03 2.887c.02 4.896.04 11.767.027 14.783l-2.094-2.427a3.048 3.048 0 0 0-2.31-1.09c-.572 0-1.12.17-1.584.492a2.91 2.91 0 0 0-1.222 1.997 2.91 2.91 0 0 0 .654 2.248l5.153 6.044c.466.548.647 1.281.84 2.059.073.298.146.596.235.885.416 1.349.981 2.62 1.633 3.677.68 1.101 1.377 1.858 2.19 2.383 1.04.669 2.285.877 3.255.984.447.05.903.075 1.353.075 2.08 0 4.05-.515 5.696-1.489 2.157-1.276 3.643-3.398 4.297-6.14.497-2.085.534-4.251.568-6.163L26 15.23a2.887 2.887 0 0 0-2.877-2.888"
                      fill="#6C7682"
                      mask="url(#p7dwhoyryb)"
                    />
                  </g>
                </svg>
              }
            />
          </div>

          {currentStatus > 0 && (
            <div ref={logRefs.qualifyWebEnquiryRef}>
              <Log
                heading_bold="Qualify"
                heading_light="web enquiry"
                array={qualify_web_enquiry_log}
                highlightedLog={highlightedLog}
                logName="qualify_web_enquiry"
              ></Log>
            </div>
          )}

          {currentStatus > 1 && (
            <div ref={logRefs.findSuppliers}>
              <Log
                heading_bold="Find"
                heading_light="suppliers"
                array={find_suppliers_log}
                logName="find_suppliers"
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}

          {currentStatus > 2 && (
            <div ref={logRefs.updateBuyingLines}>
              <Log
                logName="update_buying_lines"
                heading_bold="Update"
                heading_light="buying lines"
                array={update_buying_lines_log}
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}

          {currentStatus > 3 && (
            <div ref={logRefs.calculateSellingPrices}>
              <Log
                logName="calculate_selling_prices"
                heading_bold="Calculate"
                heading_light="selling prices"
                array={calculate_selling_prices_log}
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}

          {currentStatus > 4 && (
            <div ref={logRefs.assembleEmailDetails}>
              <Log
                logName="assemble_email_details"
                heading_bold="Assemble"
                heading_light="email details"
                array={assemble_email_details_log}
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}

          {currentStatus > 5 && (
            <div ref={logRefs.generateCustomerEmail}>
              <Log
                logName="generate_customer_email"
                heading_bold="Generate"
                heading_light="customer email"
                array={generate_customer_email_log}
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}

          {currentStatus > 6 && (
            <div ref={logRefs.sendCustomerEmail}>
              <Log
                logName="send_customer_email"
                heading_bold="Send"
                heading_light="customer email"
                array={send_customer_email_log}
                highlightedLog={highlightedLog}
              ></Log>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
