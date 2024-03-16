export const POLICIES_ACCORDION_DATA = [
  {
    id: 1,
    value: "Outbound Data",
    policiesData: [
      {
        id: 1,
        policyName: "Code",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "Medium",
        status: "",
        description: [
          "This policy is intended to mitigate data leakage. It will monitor when your users are including code in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexChat, as they make these actions. You will be able to monitor these actions via Apex security platform.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
          {
            title: "Untitled - executive team",
          },
        ],
        count: "193",
        highData: [0, 0, 0, 0, 5, 7, 0, 0, 10, 5, 0, 0], //red
        mediumData: [9, 8, 8, 8, 4, 3, 7, 11, 3, 10, 4, 8], //orange
        lowData: [8, 6, 5, 0, 0, 6, 4, 9, 8, 7, 5, 8], //green
      },
      {
        id: 2,
        policyName: "PII",
        type: "Block",
        engine: "OpenAI, Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: [
          "This policy is intended to mitigate data leakage. It will monitor when your users are including PII in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexChat, as they make these actions. You will be able to monitor these actions via Apex security platform.",
          "PII includes email addresses, social security numbers, and US zip codes.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "129",
        highData: [20, 10, 10, 0, 15, 10, 10, 0, 15, 5, 5, 0], //red
        mediumData: [10, 5, 5, 15, 10, 5, 5, 20, 3, 2, 2, 10], //orange
        lowData: [10, 5, 10, 10, 10, 15, 10, 10, 0, 8, 10, 10], //green
      },
      {
        id: 3,
        policyName: "PCI",
        type: "Block",
        engine: "OpenAI, Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: [
          "This policy is intended to mitigate data leakage. It will monitor when your users are including PCI in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexChat, as they make these actions. You will be able to monitor these actions via Apex security platform.",
          "PCI includes credit card numbers, IBANs, and Bitcoin addresses.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "203",
        highData: [12, 8, 8, 0, 14, 8, 8, 0, 10, 5, 5, 0], //red
        mediumData: [10, 5, 4, 20, 8, 4, 4, 10, 8, 3, 3, 15], //orange
        lowData: [10, 10, 10, 5, 8, 10, 14, 12, 5, 8, 10, 10], //green
      },
      {
        id: 4,
        policyName: "Access Data",
        type: "Alert",
        engine: "OpenAI, Azure R&D",
        severityLevel: "High",
        status: "",
        description: [
          "This policy is intended to mitigate data leakage. It will monitor when your users are including access data in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexChat, as they make these actions. You will be able to monitor these actions via Apex security platform.",
          "Access data includes public IPs, DB connection strings, passwords, cookies, and private keys.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "109",
        highData: [15, 6, 8, 0, 14, 6, 6, 0, 0, 4, 4, 0], //red
        mediumData: [10, 4, 5, 8, 0, 4, 4, 10, 8, 2, 0, 6], //orange
        lowData: [0, 10, 5, 8, 10, 10, 15, 0, 5, 6, 3, 3], //green
      },
    ],
  },
  {
    id: 2,
    value: "Inbound Data",
    policiesData: [
      {
        id: 1,
        policyName: "Code",
        type: "Alert",
        engine: "OpenAI, Azure R&D",
        severityLevel: "Medium",
        status: "",
        description: [
          "This policy is intended to mitigate malicious or incorrect data from becoming part of your organization’s code or being run by your users.  It will monitor when your users are receiving code in their responses, as they interact with LLMs. Your users will be notified, when they use ApexChat, as these events occur. You will be able to monitor these events via Apex security platform.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "184",
        highData: [8, 8, 6, 0, 10, 6, 7, 0, 8, 4, 4, 0], //red
        mediumData: [6, 4, 4, 8, 8, 4, 3, 8, 4, 6, 2, 0], //orange
        lowData: [4, 8, 10, 12, 4, 4, 5, 4, 0, 0, 0, 10], //green
      },
      {
        id: 2,
        policyName: "Access Data",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "Low",
        status: "",
        description: [
          "This policy is intended to mitigate malicious or incorrect access data from becoming part of your organization’s fabric or being used by your users.  It will monitor when your users are receiving access data in their responses, as they interact with LLMs. Your users will be notified, when they use ApexChat, as these events occur. You will be able to monitor these events via Apex security platform.",
          "Access data includes public IPs, DB connection strings, passwords, cookies, and private keys.",
        ],
        usedBy: [
          {
            title: "SSO Group: Untitled - dev department ",
          },
          {
            title: "Untitled - finance department",
          },
        ],
        count: "214",
        highData: [10, 6, 6, 0, 10, 6, 6, 0, 8, 4, 5, 0], //red
        mediumData: [8, 4, 4, 18, 8, 4, 4, 8, 6, 3, 3, 14], //orange
        lowData: [6, 8, 10, 5, 6, 8, 10, 10, 4, 6, 8, 6], //green
      },
    ],
  },
  {
    id: 3,
    value: "Access & Usage",
    policiesData: [
      {
        id: 1,
        policyName: "Code",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "Medium",
        status: "",
        description: [
          "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
          "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
        ],
        highData: [0, 0, 0, 0, 5, 7, 0, 0, 10, 5, 0, 0], //red
        mediumData: [9, 8, 8, 8, 4, 3, 7, 11, 3, 10, 4, 8], //orange
        lowData: [8, 6, 5, 0, 0, 6, 4, 9, 8, 7, 5, 8], //green
      },
      {
        id: 2,
        policyName: "PII",
        type: "Block",
        engine: "Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: [
          "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
          "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
        ],
        highData: [0, 0, 0, 0, 5, 7, 0, 0, 10, 5, 0, 0], //red
        mediumData: [9, 8, 8, 8, 4, 3, 7, 11, 3, 10, 4, 8], //orange
        lowData: [8, 6, 5, 0, 0, 6, 4, 9, 8, 7, 5, 8], //green
      },
      {
        id: 3,
        policyName: "PII",
        type: "Block",
        engine: "OpenAI",
        severityLevel: "High",
        status: "",
        description: [
          "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
          "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
        ],
        highData: [0, 0, 0, 0, 5, 7, 0, 0, 10, 5, 0, 0], //red
        mediumData: [9, 8, 8, 8, 4, 3, 7, 11, 3, 10, 4, 8], //orange
        lowData: [8, 6, 5, 0, 0, 6, 4, 9, 8, 7, 5, 8], //green
      },
    ],
  },
  {
    id: 4,
    value: "Threat Detection",
    policiesData: [
      {
        id: 1,
        policyName: "Suspicious Prompt",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "High",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [14, 5, 5, 0, 16, 6, 6, 0, 10, 8, 4, 0], //red
        mediumData: [5, 3, 3, 18, 5, 3, 3, 9, 5, 3, 3, 10], //orange
        lowData: [5, 8, 10, 5, 5, 8, 12, 12, 5, 5, 7, 6], //green
      },
      {
        id: 2,
        policyName: "Suspicious Response",
        type: "Alert",
        engine: "Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 3,
        policyName: "Known prompt injections",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 4,
        policyName: "Model Theft",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
    ],
  },
];

export const POLICIES_ACCESS_USAGE_DATA = [
  {
    id: 1,
    policyName: "Anna Smith Access to LLM",
    category: "Restrict",
    type: "Restrict",
    engine: "AzureOpenAI general",
    severityLevel: "Critical",
    status: "New",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "Anna Smith",
      },
    ],
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 2,
    policyName: "Access without Company’s SSO",
    category: "Restrict",
    engine: "Azure Marketing",
    type: "Restrict",
    severityLevel: "Critical",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "SSO Group: Untitled - All",
      },
    ],
    highData: [5, 6, 10, 10, 0, 5, 5, 0, 5, 5, 5, 0], //red
    mediumData: [4, 4, 5, 5, 14, 3, 3, 12, 4, 3, 3, 8], //orange
    lowData: [10, 8, 5, 5, 4, 7, 6, 5, 4, 6, 8, 8], //green
  },
  {
    id: 3,
    policyName: "Indivisual usage limit",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Critical",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "SSO Group: Untitled - dev department ",
      },
      {
        title: "Untitled - marketing department",
      },
    ],
    highData: [6, 10, 6, 6, 0, 6, 0, 0, 10, 6, 6, 0], //red
    mediumData: [4, 8, 4, 4, 12, 3, 15, 6, 6, 8, 4, 0], //orange
    lowData: [10, 6, 10, 10, 8, 0, 5, 8, 6, 0, 0, 14], //green
  },
  {
    id: 4,
    policyName: "Engine Public Access",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Medium",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "SSO Group name",
      },
    ],
    highData: [12, 5, 5, 0, 14, 5, 5, 0, 9, 5, 5, 0], //red
    mediumData: [7, 3, 3, 14, 5, 3, 3, 9, 6, 3, 3, 14], //orange
    lowData: [7, 6, 9, 6, 5, 8, 10, 9, 4, 7, 9, 5], //green
  },
];
