export type Accent = 'cyan' | 'blue' | 'green' | 'teal'

export type SkillGroup = {
  title: string
  accent: Accent
  items: string[]
}

export type ProjectGroup =
  | 'web'
  | 'powerAutomate'
  | 'powerBi'
  | 'vba'
  | 'copilot'

export type Project = {
  id: string
  title: string
  group: ProjectGroup
  category: string
  description: string
  tools: string[]
  impact: string
  screenshot?: string
}

export type TimelineStep = {
  step: string
  title: string
  description: string
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Automation & Workflow',
    accent: 'cyan',
    items: [
      'Power Automate',
      'Microsoft Teams Automation',
      'SharePoint Lists',
      'Adaptive Cards',
      'Automated Notifications',
      'Due Date Reminders',
      'File Sorting Automation',
      'Copilot Studio',
    ],
  },
  {
    title: 'Dashboard & Data',
    accent: 'blue',
    items: [
      'Power BI',
      'Microsoft Lists',
      'SharePoint Data Source',
      'Data Cleaning',
      'JO Tracker Dashboard',
      'Field Service Dashboard',
      'RFQ / Quotation Dashboard',
    ],
  },
  {
    title: 'Excel, VBA & Scripting',
    accent: 'green',
    items: [
      'Excel VBA',
      'Advanced Excel Formulas',
      'Excel Templates',
      'VBS Script',
      'Batch File',
      'PowerShell',
      'File Watcher Automation',
      'Folder Path Automation',
    ],
  },
  {
    title: 'Web & Database',
    accent: 'teal',
    items: [
      'React',
      'Vite',
      'TypeScript',
      'Supabase',
      'GitHub',
      'Vercel',
      'PostgreSQL basics',
    ],
  },
  {
    title: 'IT Support & Infrastructure',
    accent: 'cyan',
    items: [
      'Computer setup',
      'Network printer setup',
      'CCTV setup',
      'Computer reformatting',
      'Hardware troubleshooting',
      'Printer troubleshooting',
      'CPU cleaning',
      'PC building',
      'CMD basics',
      'PowerShell basics',
      'Tailscale VPN',
      'Unraid server basics',
      'Veyon / AnyDesk remote support',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'hr-attendance',
    title: 'HR Attendance System',
    group: 'web',
    category: 'Web Application',
    description:
      'A web-based HR attendance system for organizing attendance records, late records, absences, exemptions, undertime tracking, and HR monitoring in one internal system.',
    tools: ['React', 'Vite', 'TypeScript', 'Supabase', 'Vercel'],
    impact:
      'Centralized attendance records and reduced manual checking of employee attendance files.',
    screenshot: '/screenshots/hr-attendance-dashboard.png',
  },

  {
    id: 'pa-jo-channel-list',
    title: 'Active JO Channel to JO Summary List',
    group: 'powerAutomate',
    category: 'Power Automate + Teams + SharePoint',
    description:
      'Captures Job Order updates posted in a Microsoft Teams channel and saves them into a structured JO Summary SharePoint List.',
    tools: ['Power Automate', 'Microsoft Teams', 'SharePoint List'],
    impact:
      'Converted channel updates into organized records for easier Job Order tracking and reporting.',
    screenshot: '/screenshots/pa-jo-channel-to-list.png',
  },
  {
    id: 'pa-fsr-channel-list',
    title: 'Field Service Channel to FSR Summary List',
    group: 'powerAutomate',
    category: 'Power Automate + Teams + SharePoint',
    description:
      'Captures field service-related Teams channel posts and converts them into organized Field Service Summary records.',
    tools: ['Power Automate', 'Microsoft Teams', 'SharePoint List'],
    impact:
      'Improved field service backtracking and reduced manual transfer of service updates.',
    screenshot: '/screenshots/pa-fsr-channel-to-list.png',
  },
  {
    id: 'pa-xlsx-reader-list',
    title: 'Excel Attachment Reader to SharePoint List',
    group: 'powerAutomate',
    category: 'Power Automate + Excel + SharePoint',
    description:
      'Reads uploaded XLSX files, processes the file content, and creates structured SharePoint List items from the extracted data.',
    tools: ['Power Automate', 'Excel Script', 'SharePoint List'],
    impact:
      'Reduced manual encoding from Excel files and helped standardize imported records.',
    screenshot: '/screenshots/pa-excel-attachment-reader.png',
  },
  {
    id: 'pa-auto-update-column',
    title: 'SharePoint List Auto Update Column',
    group: 'powerAutomate',
    category: 'Scheduled Power Automate Workflow',
    description:
      'A scheduled flow that checks SharePoint List records and automatically updates priority/status columns based on due dates or progress.',
    tools: ['Power Automate', 'SharePoint List', 'Scheduled Flow'],
    impact:
      'Kept list records updated without manual monitoring and improved visibility of priority items.',
    screenshot: '/screenshots/pa-auto-update-column.png',
  },
  {
    id: 'pa-due-date-3-days',
    title: 'Due Date Reminder — 3 Days Before',
    group: 'powerAutomate',
    category: 'Power Automate Reminder System',
    description:
      'A daily reminder workflow that detects SharePoint items due in 3 days and sends notification cards to the proper Teams channel or users.',
    tools: ['Power Automate', 'SharePoint List', 'Teams Notification'],
    impact:
      'Helped users prepare before deadlines and reduced missed due dates.',
    screenshot: '/screenshots/pa-due-date-3-days.png',
  },
  {
    id: 'pa-due-date-2-days',
    title: 'Due Date Reminder — 2 Days Before',
    group: 'powerAutomate',
    category: 'Power Automate Reminder System',
    description:
      'A daily reminder workflow that detects SharePoint items due in 2 days and sends automated Teams reminders for follow-up.',
    tools: ['Power Automate', 'SharePoint List', 'Teams Notification'],
    impact:
      'Added a second reminder layer for urgent items approaching their deadline.',
    screenshot: '/screenshots/pa-due-date-2-days.png',
  },
  {
    id: 'pa-update-message',
    title: 'SharePoint Status Update Message',
    group: 'powerAutomate',
    category: 'Power Automate + Adaptive Card',
    description:
      'Detects SharePoint List status changes and sends automatic update messages or adaptive cards to selected users or Teams channels.',
    tools: ['Power Automate', 'SharePoint List', 'Adaptive Card'],
    impact:
      'Improved communication and reduced manual status follow-ups between users.',
    screenshot: '/screenshots/pa-status-update-message.png',
  },
{
  id: 'pa-files-sort-folder',
  title: 'AJO File Sorting Automation',
  group: 'powerAutomate',
  category: 'Power Automate File Organization',
  description:
    'Monitors a Teams/SharePoint folder and automatically sorts uploaded files into proper folders based on file type, such as PDF and XLSX.',
  tools: ['Power Automate', 'SharePoint Folder', 'Teams Files'],
  impact:
    'Reduced messy document folders and removed repetitive manual file sorting.',
  screenshot: '/screenshots/pa-ajo-file-sorting.png',
},
  {
    id: 'pa-post-files-sort',
    title: 'Field Service File Sorting Automation',
    group: 'powerAutomate',
    category: 'Power Automate File Organization',
    description:
      'Sorts field service-related uploaded files into proper folders, separating Excel files, PDFs, requests, and supporting attachments.',
    tools: ['Power Automate', 'SharePoint Folder', 'File Type Conditions'],
    impact:
      'Made field service document storage cleaner and easier to locate.',
    screenshot: '/screenshots/pa-field-service-file-sorting.png',
  },
  {
    id: 'pa-channel-to-excel',
    title: 'Teams Post to Excel Summary',
    group: 'powerAutomate',
    category: 'Power Automate + Excel',
    description:
      'Transfers Microsoft Teams channel posts into an Excel table with formulas, so users only need to post once instead of updating both Teams and Excel.',
    tools: ['Power Automate', 'Microsoft Teams', 'Excel Table'],
    impact:
      'Reduced duplicate encoding and simplified summary tracking workflows.',
    screenshot: '/screenshots/pa-teams-post-to-excel.png',
  },

  {
    id: 'rfq-dashboard',
    title: 'RFQ / Quotation Dashboard',
    group: 'powerBi',
    category: 'Power BI Dashboard',
    description:
      'A Power BI dashboard for monitoring RFQs, quotations, estimates, drawing-related tracking, statuses, actions, sources, overdue items, and due-this-week items.',
    tools: ['Power BI', 'SharePoint List', 'Microsoft Lists'],
    impact:
      'Improved quotation and engineering tracking through visual analytics and clearer status monitoring.',
    screenshot: '/screenshots/rfq-dashboard.png',
  },
  {
    id: 'jo-tracker',
    title: 'JO Tracker Dashboard',
    group: 'powerBi',
    category: 'Power BI Dashboard',
    description:
      'A Power BI dashboard based on JO Summary data for tracking job orders, active items, delivered items, overdue items, due dates, status, and progress.',
    tools: ['Power BI', 'SharePoint List', 'Microsoft Lists'],
    impact:
      'Made Job Order monitoring more visual, organized, and easier to analyze.',
    screenshot: '/screenshots/jo-tracker-powerbi.png',
  },
  {
    id: 'field-service-dashboard',
    title: 'Field Service Dashboard',
    group: 'powerBi',
    category: 'Power BI Dashboard',
    description:
      'A Power BI dashboard for backtracking field service records, customers, projects, service activity, and historical service summaries.',
    tools: ['Power BI', 'SharePoint List', 'Microsoft Lists'],
    impact:
      'Improved visibility of field service history and made service backtracking easier.',
    screenshot: '/screenshots/field-service-dashboard.png',
  },

  {
    id: 'requisition-automation',
    title: 'Requisition Automation System',
    group: 'vba',
    category: 'Excel VBA + Formula System',
    description:
      'An Excel-based requisition automation tool that converts pasted quotation or Job Order item lists into organized item summaries, requisition summaries, accessory summaries, and requisition slips.',
    tools: ['Excel VBA', 'Advanced Excel Formulas', 'Excel Templates', 'Folder Path Automation'],
    impact:
      'Reduced repetitive encoding, improved requisition preparation, and made item and accessory summaries faster to generate.',
    screenshot: '/screenshots/vba-requisition-system.png',
  },
  {
    id: 'sticker-generator',
    title: 'Automatic Sticker Generator',
    group: 'vba',
    category: 'Excel VBA + VBS + PowerShell Automation',
    description:
      'An automated sticker generation system for QC/QA panelboard sticker preparation. It generates printable sticker outputs from Job Order files and prepares them for XPrinter printing.',
    tools: ['Excel VBA', 'VBS Script', 'Batch File', 'PowerShell', 'File Watcher Automation', 'XPrinter Workflow'],
    impact:
      'Reduced manual sticker formatting, automated repetitive sticker preparation, and improved the QC/QA printing workflow.',
    screenshot: '/screenshots/vba-sticker-generator.png',
  },

  {
    id: 'rfq-bot',
    title: 'RFQ Status Assistant Bot',
    group: 'copilot',
    category: 'Copilot Studio + SharePoint List',
    description:
      'A Copilot Studio chatbot connected to a SharePoint List. Users can search by RFQ number or company name, and the bot returns available RFQ details such as status, action, source, and related folder link.',
    tools: ['Copilot Studio', 'Microsoft Teams', 'SharePoint List', 'Topic Flow', 'Conditional Logic'],
    impact:
      'Reduced repetitive RFQ status inquiries and provided a self-service way to check project status through chat.',
    screenshot: '/screenshots/copilot-rfq-bot.png',
  },
]

export const featuredProjectIds = [
  'hr-attendance',
  'jo-tracker',
  'rfq-dashboard',
  'requisition-automation',
  'sticker-generator',
  'rfq-bot',
]

export const powerAutomateProjectIds = [
  'pa-jo-channel-list',
  'pa-fsr-channel-list',
  'pa-xlsx-reader-list',
  'pa-auto-update-column',
  'pa-due-date-3-days',
  'pa-due-date-2-days',
  'pa-update-message',
  'pa-files-sort-folder',
  'pa-post-files-sort',
  'pa-channel-to-excel',
]

export const powerBiProjectIds = ['rfq-dashboard', 'jo-tracker', 'field-service-dashboard']
export const vbaProjectIds = ['requisition-automation', 'sticker-generator']
export const copilotProjectIds = ['rfq-bot']
export const webProjectIds = ['hr-attendance']

export const careerTimeline: TimelineStep[] = [
  {
    step: '01',
    title: 'IT Support Foundation',
    description:
      'Built a strong foundation in computer setup, printer troubleshooting, CCTV setup, reformatting, hardware support, network troubleshooting, and remote support.',
  },
  {
    step: '02',
    title: 'Excel VBA Automation Builder',
    description:
      'Created Excel VBA tools for requisition preparation and sticker generation, supported by formulas, VBS scripts, batch files, and PowerShell folder watching.',
  },
  {
    step: '03',
    title: 'Microsoft 365 Workflow Automation',
    description:
      'Built Power Automate workflows using Teams, SharePoint Lists, Excel, reminders, adaptive cards, and file organization flows.',
  },
  {
    step: '04',
    title: 'Dashboard & Reporting',
    description:
      'Built Power BI dashboards for RFQ, quotation, Job Order, and field service tracking using Microsoft Lists and SharePoint data.',
  },
  {
    step: '05',
    title: 'Internal Web Application Development',
    description:
      'Developed an HR Attendance System using React, Vite, TypeScript, Supabase, and Vercel to centralize attendance monitoring.',
  },
]

export const galleryShots: { src: string; label: string }[] = [
  { src: '/screenshots/hr-attendance-dashboard.png', label: 'HR Attendance System' },
  { src: '/screenshots/jo-tracker-powerbi.png', label: 'JO Tracker Dashboard' },
  { src: '/screenshots/rfq-dashboard.png', label: 'RFQ / Quotation Dashboard' },
  { src: '/screenshots/field-service-dashboard.png', label: 'Field Service Dashboard' },
  { src: '/screenshots/pa-jo-channel-to-list.png', label: 'Power Automate — JO Channel to List' },
  { src: '/screenshots/pa-auto-update-column.png', label: 'Power Automate — Auto Update Column' },
  { src: '/screenshots/copilot-rfq-bot.png', label: 'RFQ Status Assistant Bot' },
  { src: '/screenshots/vba-requisition-system.png', label: 'VBA Requisition System' },
  { src: '/screenshots/vba-sticker-generator.png', label: 'Automatic Sticker Generator' },
]