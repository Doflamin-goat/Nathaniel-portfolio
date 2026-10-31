export const media2026 = {
  hr: { src: '/projects/2026/01_hr_attendance_dashboard.png', alt: 'HR attendance dashboard with attendance imports, employee actions, filters and redacted metrics', caption: 'HR Attendance Management System — dashboard', approved: true },
  requisition: { src: '/projects/2026/02_requisition_generator.png', alt: 'Requisition Generator Windows application showing Excel import and requisition processing navigation', caption: 'Requisition Generator — quotation import workspace', approved: true },
  finder: { src: '/projects/2026/03_approved_files_finder.png', alt: 'Approved Files Finder with project reference search, OneDrive and SharePoint interface options', caption: 'Approved Files Finder — Windows interface; SharePoint Online remains unresolved', approved: true },
  rfq: { src: '/projects/2026/04_powerbi_rfq_dashboard.png', alt: 'RFQ report with quotation summaries, deadline filters and status tracking', caption: 'RFQ & Quotation Analytics', approved: true },
  engineering: { src: '/projects/2026/05_powerbi_engineering_dashboard.png', alt: 'Engineering report with workload distribution, item categories and completion tracking', caption: 'Engineering Performance Analytics', approved: true },
  orders: { src: '/projects/2026/06_powerbi_job_order_dashboard.png', alt: 'Job order report with delivery status, source filters and due date tracking', caption: 'Job Order Monitoring', approved: true },
  schema: { src: '/projects/2026/07_supabase_schema.png', alt: 'Supabase schema visualizer showing related HR attendance database tables', caption: 'Database Architecture & Backend — Supabase / PostgreSQL', approved: false },
} as const

export type ProjectMedia = { src: string; alt: string; caption: string; approved: boolean }
export const withheldMediaPaths: string[] = Object.values(media2026).filter(image => !image.approved).map(image => image.src)
