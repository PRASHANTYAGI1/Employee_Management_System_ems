import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  CalendarDays,
  Clock3,
  CalendarCheck,
  Wallet,
  FolderKanban,
  MessageCircle,
  FileBadge,
  UserRoundCheck,
  Building2,
  LayoutDashboard,
  CheckCircle2,
  ChartNoAxesCombined,
  MessageSquareWarning,
  BriefcaseBusiness,
  CircleDollarSign,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Manage employee profiles, personal information, departments, designations, joining details and complete employment records.",
    label: "PEOPLE MANAGEMENT",
    color: "bg-[var(--primary-light)] text-[var(--primary)]",
  },
  {
    icon: CalendarCheck,
    title: "Attendance & Time Tracking",
    description:
      "Monitor daily check-ins, check-outs, working hours, attendance history and employee presence.",
    label: "WORKFORCE",
    color: "bg-[var(--success-light)] text-[var(--success)]",
  },
  {
    icon: CalendarDays,
    title: "Leave Management",
    description:
      "Submit leave applications, review leave balances and manage approval workflows with clear status tracking.",
    label: "WORKFORCE",
    color: "bg-[var(--info-light)] text-[var(--info)]",
  },
  {
    icon: MessageSquareWarning,
    title: "Grievance Management",
    description:
      "Give employees a structured way to raise concerns, track complaints and follow resolution progress.",
    label: "EMPLOYEE EXPERIENCE",
    color: "bg-[var(--danger-light)] text-[var(--danger)]",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Performance Tracking",
    description:
      "Monitor individual and team performance, review progress and gain visibility into organizational productivity.",
    label: "ANALYTICS",
    color: "bg-[var(--secondary-light)] text-[var(--secondary)]",
  },
  {
    icon: FolderKanban,
    title: "Project & Task Management",
    description:
      "Assign projects, organize tasks through Kanban boards, track deadlines and monitor team progress.",
    label: "PRODUCTIVITY",
    color: "bg-[var(--primary-light)] text-[var(--primary)]",
  },
  {
    icon: Wallet,
    title: "Salary & Payroll Management",
    description:
      "Maintain salary records, update payment status after bank transaction confirmation, manage deductions and generate payslips.",
    label: "FINANCE",
    color: "bg-[var(--success-light)] text-[var(--success)]",
  },
  {
    icon: Wallet, // Replaced receipt with wallet or general finance icon to maintain clean mapping
    title: "Expense Management",
    description:
      "Record company expenses including stationery, refreshments, coffee, office supplies and miscellaneous purchases.",
    label: "FINANCE",
    color: "bg-[var(--warning-light)] text-[var(--warning-dark)]",
  },
  {
    icon: MessageCircle,
    title: "Internal Team Chat",
    description:
      "Enable one-to-one employee communication and keep conversations within the organization's workspace.",
    label: "COMMUNICATION",
    color: "bg-[var(--info-light)] text-[var(--info)]",
  },
  {
    icon: FileBadge,
    title: "Documents & Certificates",
    description:
      "Manage company documents, employee certificates, generated salary slips and important employment records.",
    label: "DOCUMENTS",
    color: "bg-[var(--secondary-light)] text-[var(--secondary)]",
  },
  {
    icon: UserRoundCheck,
    title: "Employee Lifecycle",
    description:
      "Manage onboarding, resignation requests, notice periods, employee exits and related approval workflows.",
    label: "PEOPLE MANAGEMENT",
    color: "bg-[var(--primary-light)] text-[var(--primary)]",
  },
  {
    icon: Building2,
    title: "Organization Management",
    description:
      "Organize departments, teams, company information, policies, internal records and organizational structure.",
    label: "ADMINISTRATION",
    color: "bg-[var(--success-light)] text-[var(--success)]",
  },
];

const workflow = [
  {
    number: "01",
    title: "Manage People",
    description: "Employee profiles, departments, attendance and leave.",
    icon: Users,
  },
  {
    number: "02",
    title: "Manage Operations",
    description: "Projects, tasks, performance and team communication.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Manage Finances",
    description: "Salary processing, payment records and expenses.",
    icon: CircleDollarSign,
  },
  {
    number: "04",
    title: "Stay in Control",
    description: "Documents, approvals, reports and company records.",
    icon: ShieldCheckFallback => Building2, // safe fallback
  },
];

const FeaturesSection = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[var(--navy-950)] text-white py-24 lg:py-32"
    >
      {/* Background ambient lighting gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6 shadow-inner">
            <LayoutDashboard size={16} className="text-[var(--accent)]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
              Powerful Platform Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
            Everything Your Company Needs.
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-cyan-300 to-teal-200">
              All Working Together.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300/80">
            From managing your people and daily operations to tracking
            projects, handling payroll and controlling company expenses,
            EMPOWER EMS brings your entire organization into one
            connected, luxury workspace.
          </p>
        </div>

        {/* FEATURED FEATURE - ATTENDANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              Featured Capability
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-6 leading-tight">
              Complete Workforce Visibility.
              <span className="block text-[var(--accent)] mt-2">
                Every Single Day.
              </span>
            </h3>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
              Know who's working, who's on leave and how your
              organization is performing. Get a clearer picture of
              employee attendance, working hours and workforce
              activity through a centralized dashboard.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Clock3 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live Check-in</h4>
                  <p className="text-xs text-slate-400 mt-1">Track employee in/out time.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Leave Tracking</h4>
                  <p className="text-xs text-slate-400 mt-1">Manage requests & balances.</p>
                </div>
              </div>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 mt-10 text-sm font-bold text-[var(--accent)] hover:gap-4 transition-all group"
            >
              Explore the platform
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* ATTENDANCE DASHBOARD PREVIEW */}
          <div className="relative z-10 rounded-2xl bg-[var(--navy-950)] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Workforce Overview
                </p>
                <h4 className="text-lg font-bold text-white mt-1">
                  Attendance Summary
                </h4>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Today
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                <Users size={18} className="text-cyan-400" />
                <p className="text-xs text-slate-400 mt-3">Total Employees</p>
                <h3 className="text-2xl font-extrabold text-white mt-1">128</h3>
              </div>

              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                <UserRoundCheck size={18} className="text-emerald-400" />
                <p className="text-xs text-emerald-300 mt-3">Present Today</p>
                <h3 className="text-2xl font-extrabold text-white mt-1">118</h3>
              </div>

              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                <CalendarDays size={18} className="text-amber-400" />
                <p className="text-xs text-amber-300 mt-3">On Leave</p>
                <h3 className="text-2xl font-extrabold text-white mt-1">06</h3>
              </div>

              <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
                <Clock3 size={18} className="text-blue-400" />
                <p className="text-xs text-blue-300 mt-3">Not Checked In</p>
                <h3 className="text-2xl font-extrabold text-white mt-1">04</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Attendance Rate</span>
                <span className="text-sm font-bold text-emerald-400">92.2%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" style={{ width: "92.2%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ALL 12 CORE MODULES (Clean staggered grid without overlap) */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                One Platform. Multiple Possibilities.
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-white">
                Explore Our Core Modules
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Every essential company operation has its own dedicated space, working together to simplify everyday management.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--accent)] bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <span>12 Core Modules</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 hover:bg-white/[0.06] hover:border-[var(--accent)]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-slate-950 transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--accent)] mt-6 uppercase">
                    {feature.label}
                  </span>

                  <h4 className="text-lg font-bold mt-2 text-white group-hover:text-[var(--accent)] transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-relaxed mt-3 flex-1 text-slate-400">
                    {feature.description}
                  </p>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                      Explore module
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROLE-BASED FEATURE ACCESS */}
        <div className="mt-32 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 lg:p-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Built Around Your Team
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
              The Right Tools for Every Role.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Three dedicated dashboards, three different experiences. Every role gets the tools and information relevant to its responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
              <Building2 size={26} className="text-cyan-400" />
              <h4 className="text-lg font-bold text-white mt-5">Admin / Owner</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Organization-wide insights, company operations, expenses, reports and access management.
              </p>
              <span className="inline-block mt-6 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Organization Control
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
              <Users size={26} className="text-teal-400" />
              <h4 className="text-lg font-bold text-white mt-5">HR Dashboard</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Employee records, attendance, leave approvals, grievances, payroll and employee lifecycle.
              </p>
              <span className="inline-block mt-6 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                People Operations
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
              <UserRoundCheck size={26} className="text-emerald-400" />
              <h4 className="text-lg font-bold text-white mt-5">Employee Dashboard</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Personal attendance, leave, payslips, assigned projects, grievances and team chat.
              </p>
              <span className="inline-block mt-6 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Personal Workspace
              </span>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-32 text-center rounded-[2.5rem] bg-gradient-to-r from-cyan-950 via-[var(--navy-900)] to-teal-950 border border-white/10 p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)] pointer-events-none" />
          
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white relative z-10">
            Ready to Bring Your Organization Together?
          </h3>

          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed text-slate-300 relative z-10">
            Simplify workforce management, organize daily operations and create a more connected workplace with EMPOWER EMS.
          </p>

          <a
            href="/register"
            className="inline-flex items-center gap-2 mt-9 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-xl relative z-10 group"
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;