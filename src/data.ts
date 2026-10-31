import { media2026, type ProjectMedia } from './media2026'

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
  | 'desktop'
  | 'infrastructure'
  | 'database'

export type Project = {
  id: string
  title: string
  group: ProjectGroup
  category: string
  description: string
  tools: string[]
  impact: string
  screenshot?: string
  year?: number
  media?: ProjectMedia[]
  problem?: string
  solution?: string
  functions?: string[]
  status?: string
  backend?: string
  experienceArea?: boolean
}

export type TimelineStep = {
  step: string
  title: string
  description: string
}

export const skillGroups: SkillGroup[] = [
  { title: 'Software & Desktop Development', accent: 'blue', items: ['Python', 'PySide6 / Qt', 'Windows desktop applications', 'PyInstaller packaging', 'JSON configuration', 'Excel file processing', 'OneDrive folder integration'] },
  {
    title: 'IT Support & Infrastructure',
    accent: 'cyan',
    items: [
      'Windows installation, setup & troubleshooting',
      'Software & driver installation',
      'Hardware diagnostics & PC maintenance',
      'LAN / Wi-Fi & IP connectivity diagnostics',
      'Shared printer & file access support',
      'Microsoft 365 & business application support',
      'VPN & remote support',
      'Server connectivity & shared storage',
      'CCTV setup and support',
    ],
  },
  { title: 'Servers & Networking', accent: 'cyan', items: ['Unraid', 'Docker', 'Tailscale', 'AdGuard Home', 'LAN / Wi-Fi networking', 'DNS configuration', 'Router configuration', 'Android WebView integration'] },
  { title: 'Database Development & Integration', accent: 'green', items: ['PostgreSQL', 'Supabase', 'SQL', 'ODBC', 'ADODB', 'Excel VBA synchronization', 'Incremental and bidirectional synchronization'] },
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
]

export const projects: Project[] = [
  {
    id: 'requisition-desktop', title: 'Requisition Generator', group: 'desktop', year: 2026,
    category: 'Desktop Application / Engineering Automation',
    description: 'A Windows desktop application that processes electrical panelboard and switchgear quotation data into structured requisition workbooks.',
    tools: ['Python', 'PySide6 / Qt', 'Excel Processing', 'PyInstaller', 'JSON Configuration', 'Shared Network Storage'],
    impact: 'Supports material preparation and review through structured requisition and accessory summaries.',
    media: [media2026.requisition],
    problem: 'Manual quotation-to-requisition preparation required repeated spreadsheet work and review.',
    solution: 'A desktop application imports quotation data, calculates material requirements and generates structured workbooks. This is distinct from the existing Excel VBA requisition system.',
    functions: ['Excel quotation importing', 'Drag-and-drop processing', 'Circuit breaker identification', 'Breaker quantity calculations', 'Accessory extraction and processing', 'Requisition Summary generation', 'Accessories Summary generation', 'Unrecognized item review', 'QC/QA correction workflows', 'Configurable item master', 'Standalone Windows executable packaging', 'Shared network configuration'],
  },
  {
    id: 'approved-files-finder', title: 'Approved Files Finder', group: 'desktop', year: 2026,
    category: 'Desktop Utility / Document Management',
    description: 'A Windows utility for locating approved engineering documents by project reference number through local OneDrive folders.',
    tools: ['Python', 'PySide6', 'Windows', 'PyInstaller', 'OneDrive File Integration'],
    impact: 'Provides a read-only lookup workflow for matching files and folders.',
    media: [media2026.finder],
    problem: 'Finding approved documents across project folders creates repeated navigation and searching.',
    solution: 'Project reference search connects users to matching local OneDrive files, folders and recent project history.',
    functions: ['Project reference searching', 'Approved document lookup', 'Local OneDrive folder integration', 'Open matching files and folders', 'Recent project history', 'Configurable file locations', 'Read-only document access', 'Standalone Windows application'],
    status: 'Windows operational · macOS expansion planned / ongoing. Direct SharePoint Online integration remains unresolved; its interface option does not indicate working integration.',
  },
  {
    id: 'engineering-dashboard', title: 'Engineering Performance Analytics', group: 'powerBi', year: 2026,
    category: 'Business Intelligence / Engineering Analytics',
    description: 'A Power BI report bringing engineering workload, estimation and design completion into a coordinated reporting view.',
    tools: ['Power BI', 'Interactive Filtering', 'Workload Reporting', 'Data Visualization'],
    impact: 'Supports review of workload distribution, work volume and completion status.',
    media: [media2026.engineering],
    problem: 'Engineering assignments and completion activity need a consolidated view.',
    solution: 'Filtered summaries visualize engineering load, item categories and deadline performance. Underlying calculation and integration details are not asserted.',
    functions: ['Engineering workload analysis', 'Assigned engineer tracking', 'Estimation and design completion monitoring', 'Workload distribution', 'Work volume analysis', 'Engineering item categorization', 'Deadline and performance monitoring'],
  },
  {
    id: 'it-infrastructure-experience', title: 'IT Infrastructure & Technical Support', group: 'infrastructure', year: 2026, experienceArea: true,
    category: 'IT Support / Systems Administration',
    description: 'Hands-on configuration, support and troubleshooting for office computers, network resources, server connectivity and shared services.',
    tools: ['Windows', 'Networking', 'DNS', 'VPN', 'Server Administration', 'Printer Sharing', 'System Diagnostics'],
    impact: 'An infrastructure experience area covering user support and shared service connectivity.',
    problem: 'Office users depend on reliable computers, shared resources and remote access.',
    solution: 'Troubleshooting and configuration across Windows, printers, routers, DNS, remote access and shared storage.',
    functions: ['Windows computer troubleshooting', 'Shared printer configuration', 'Local networking and DNS troubleshooting', 'Router configuration', 'Server connectivity', 'Remote access solutions', 'Windows OS diagnostics', 'Shared storage and resource access'],
  },
  {
    id: 'hr-attendance',
    title: 'HR Attendance Management System',
    group: 'web',
    category: 'Full-Stack Web Development / Human Resource Systems',
    description:
      'Developed a web application to streamline attendance monitoring, employee management and administrative workflows across organizational workspaces.',
    tools: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    impact:
      'Brings attendance records, administrative tasks and Excel reporting into a shared application workflow.',
    year: 2026,
    media: [media2026.hr, media2026.schema],
    problem: 'Attendance imports, exceptions and administrative follow-ups need a consistent place to be managed.',
    solution: 'A React and TypeScript interface backed by Supabase and PostgreSQL, with attendance processing and administrative reporting.',
    functions: ['Employee management', 'Biometric attendance imports', 'Late and absence tracking', 'Undertime calculations', 'Half-day processing', 'Leave and exemption management', 'Administrative memo tracking', 'Dashboard metrics', 'Excel attendance exports', 'Multiple organizational workspaces', 'Role-based access', 'PostgreSQL data management'],
    backend: 'Supabase provides backend services over relational PostgreSQL tables for attendance and administrative records. The documented application includes workspace and role-based access. The schema image alone does not verify access-policy enforcement, security controls or production readiness.',
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
    title: 'RFQ & Quotation Analytics',
    group: 'powerBi',
    category: 'Business Intelligence / Sales Reporting',
    description:
      'A Power BI report for RFQ monitoring, quotation tracking and sales summaries, with interactive deadline, status and action filters.',
    tools: ['Power BI', 'SharePoint List', 'Microsoft Lists'],
    impact:
      'Organizes quotation activity and deadline visibility without presenting company metrics as personal achievements.',
    year: 2026,
    media: [media2026.rfq],
    problem: 'Quotation activity and deadlines need a consolidated reporting view.',
    solution: 'Interactive Power BI summaries and filters connect RFQ status, quotation values and salesperson activity.',
    functions: ['RFQ monitoring', 'Quotation tracking', 'Sales performance summaries', 'Quotation values and totals', 'Deadline monitoring', 'Salesperson performance', 'Status and action tracking', 'Interactive report filtering'],
  },
  {
    id: 'jo-tracker',
    title: 'Job Order Monitoring',
    group: 'powerBi',
    category: 'Business Intelligence / Operations Monitoring',
    description:
      'A Power BI dashboard based on JO Summary data for tracking job orders, active items, delivered items, overdue items, due dates, status, and progress.',
    tools: ['Power BI', 'SharePoint List', 'Microsoft Lists'],
    impact:
      'Made Job Order monitoring more visual, organized, and easier to analyze.',
    year: 2026,
    media: [media2026.orders],
    problem: 'Job order progress, delivery and deadlines need to be reviewed together.',
    solution: 'A Power BI report combines status distribution, delivery tracking and filtered job order summaries.',
    functions: ['Job order status monitoring', 'Delivery tracking', 'Due date monitoring', 'Project progress visibility', 'Salesman and source filtering', 'Status distribution', 'On-time and delayed work tracking', 'Job order summary reporting'],
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
  'requisition-desktop',
  'approved-files-finder',
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

export const powerBiProjectIds = ['rfq-dashboard', 'engineering-dashboard', 'jo-tracker', 'field-service-dashboard']
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
