export const qualify_web_enquiry_log = [
  {
    message:
      "I have created a [new entity named TEMSA ELECTROMEX Co.,LTD](/crm/entity/516991).",
    events: [],
    complete: true,
  },

  {
    message:
      "I have created a [new contact named KOSUKE NOMURA](/crm/contact/733824).",
    events: [],
    complete: true,
  },

  {
    message: "I have created a [new enquiry (SG-E159236)](/activity/1375602).",
    events: [],
    complete: true,
  },

  {
    message:
      "I have finished qualifying [web enquiry 667549](/heap/open/web_enquiry/667549).",

    events: [
      "Starting task (Qualify Web Enquiry)...",
      "Loading web enquiry...",
      "Overriding allow_processing_of_already_processed_web_enquiries to true...",
      "Checking if this web enquiry has parts...",
      "Checking if we can qualify this web enquiry...",
      "Determining zone and sales area...",
      "Determined zone (USA) and sales area (*Jennie Danton PROTECT).",
      "Web enquiry does not have an associated entity.",
      "Creating entity...",
      "Created entity with ID: 522928",
      "Not linking web enquiry to new entity.",
      "Web enquiry does not have an associated contact.",
      "Creating contact...",
      "Created contact with ID: 748864",
      "Not linking web enquiry to new contact.",
      "Creating contact telephone number...",
      "Creating contact email address...",
      "Creating enquiry...",
      "Created enquiry with ID: 1425500",
      "Skipping web enquiry qualification...",
      "Transferring parts from web enquiry to enquiry...",
      "Generating enquiry stats...",
      "Logging new enquiry to Reckoning service...",
      "Making contact and entity searchable...",
      "Adding creation event to enquiry history...",
      "Adding note to new enquiry...",
      "Web enquiry qualified successfully. Enquiry_id: 1425500",
      "Task completed",
    ],
    complete: false,
  },
];
