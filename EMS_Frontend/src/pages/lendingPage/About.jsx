
import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Users,
  CalendarCheck,
  Wallet,
  FolderKanban,
  MessageCircle,
  ChartNoAxesCombined,
  Building2,
  UserCog,
  UserRound,
  CheckCircle2,
  Clock3,
  CircleDollarSign,
  BriefcaseBusiness,
  Activity,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: CalendarCheck,
    title: "Attendance & Leave",
    description: "Track daily attendance, check-ins, working hours and leave workflows.",
    color: "bg-[var(--primary-light)] text-[var(--primary)]",
  },
  {
    icon: CircleDollarSign,
    title: "Payroll & Finance",
    description: "Manage salary records, payslips, expenses and financial operations.",
    color: "bg-[var(--success-light)] text-[var(--success)]",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Organize tasks, monitor deadlines and track team progress.",
    color: "bg-[var(--secondary-light)] text-[var(--secondary)]",
  },
  {
    icon: MessageCircle,
    title: "Team Communication",
    description: "Keep employees and teams connected through internal conversations.",
    color: "bg-[var(--info-light)] text-[var(--info)]",
  },
];

const roles = [
  {
    icon: Building2,
    role: "Admin / Owner",
    description: "Complete organizational visibility, company operations, workforce overview and business-level control.",
    features: ["Organization overview", "Reports & analytics", "User and role management"],
    color: "bg-[var(--primary-light)] text-[var(--primary)]",
    number: "01",
  },
  {
    icon: UserCog,
    role: "HR",
    description: "Manage the employee lifecycle, HR operations, approvals, payroll records and workplace activities.",
    features: ["Employee management", "Leave & grievance approvals", "Salary & documentation"],
    color: "bg-[var(--secondary-light)] text-[var(--secondary)]",
    number: "02",
  },
  {
    icon: UserRound,
    role: "Employee",
    description: "Access personal information, attendance, salary details, assigned projects and team communication.",
    features: ["Personal dashboard", "Leave & salary records", "Projects & team chat"],
    color: "bg-[var(--success-light)] text-[var(--success)]",
    number: "03",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--white)] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* SECTION INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-body)] mb-5">
            <Sparkles size={15} className="text-[var(--secondary)]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[var(--primary)]">
              About EMPOWER EMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)]">
            More Than HR Management.
            <span className="block text-transparent bg-clip-text bg-[var(--gradient-brand)] mt-2">
              A Smarter Way to Run Your Organization.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-[var(--text-secondary)]">
            Managing an organization involves more than managing people.
            It takes coordination, accountability, communication and
            visibility across every department. EMPOWER EMS brings
            these essential operations together in one connected platform.
          </p>
        </div>

        {/* MAIN ABOUT VISUAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT: VISION */}
          <div>

            <span className="text-sm font-bold text-[var(--secondary)] uppercase tracking-widest">
              Our Vision
            </span>

            <h3 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-[var(--text-primary)]">
              One Organization.
              <br />
              One Connected Platform.
              <br />
              <span className="text-[var(--primary)]">
                Endless Possibilities.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              EMPOWER EMS is designed to simplify the way companies
              operate every day. From an employee's first day to their
              complete organizational journey, every important activity
              can be managed through a structured digital workspace.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
              Instead of switching between disconnected tools, teams
              can manage workforce operations, financial records,
              projects, documents and internal communication through
              a unified system with dedicated access for Admin, HR
              and Employees.
            </p>

            {/* VISION HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">
                    Role-Based Control
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-5">
                    The right access for every responsibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[var(--success-light)] text-[var(--success)] shrink-0">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">
                    Connected Operations
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-5">
                    Bring everyday company workflows together.
                  </p>
                </div>
              </div>

            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-2 mt-9 text-sm font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
            >
              Discover What We Offer
              <ArrowRight size={18} />
            </a>

          </div>

          {/* RIGHT: PRODUCT PREVIEW */}
          <div className="relative">

            <div className="absolute -inset-8 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60" />

            <div className="relative rounded-[var(--radius-2xl)] border border-[var(--border-color)] bg-[var(--bg-body)] p-4 sm:p-6 shadow-[var(--shadow-xl)]">

              {/* Preview Header */}
              <div className="flex items-center justify-between gap-3 mb-6">

                <div>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    EMPOWER EMS / OVERVIEW
                  </span>
                  <h3 className="text-lg font-bold mt-1">
                    Organization at a glance
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--success-light)] text-[var(--success-dark)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
                  <span className="text-xs font-bold">Live Preview</span>
                </div>

              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 gap-3">

                <div className="card !p-4">
                  <div className="flex justify-between items-center">
                    <Users size={19} className="text-[var(--primary)]" />
                    <span className="badge badge-primary">Team</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-4">
                    Total Employees
                  </p>
                  <h3 className="text-2xl font-extrabold mt-1">128</h3>
                  <p className="text-xs text-[var(--success)] mt-1">
                    Active workforce
                  </p>
                </div>

                <div className="card !p-4">
                  <div className="flex justify-between items-center">
                    <CalendarCheck size={19} className="text-[var(--success)]" />
                    <span className="badge badge-success">Today</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-4">
                    Attendance
                  </p>
                  <h3 className="text-2xl font-extrabold mt-1">92%</h3>
                  <p className="text-xs text-[var(--success)] mt-1">
                    118 present
                  </p>
                </div>

                <div className="card !p-4">
                  <div className="flex justify-between items-center">
                    <FolderKanban size={19} className="text-[var(--secondary)]" />
                    <span className="badge badge-info">Projects</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-4">
                    Active Projects
                  </p>
                  <h3 className="text-2xl font-extrabold mt-1">16</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Across all teams
                  </p>
                </div>

                <div className="card !p-4">
                  <div className="flex justify-between items-center">
                    <Clock3 size={19} className="text-[var(--warning)]" />
                    <span className="badge badge-warning">Pending</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-4">
                    Approvals
                  </p>
                  <h3 className="text-2xl font-extrabold mt-1">08</h3>
                  <p className="text-xs text-[var(--warning)] mt-1">
                    Requires attention
                  </p>
                </div>

              </div>

              {/* Activity Panel */}
              <div className="card mt-4 !p-4">

                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h4 className="font-bold text-sm">
                      Organization Activity
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Sample activity overview
                    </p>
                  </div>
                  <ChartNoAxesCombined
                    size={20}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--primary-light)] text-[var(--primary)]">
                      <UserRound size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        New employee onboarded
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Employee management
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)]">
                      09:30 AM
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--success-light)] text-[var(--success)]">
                      <Wallet size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        Salary record updated
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Payroll management
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)]">
                      10:15 AM
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--secondary-light)] text-[var(--secondary)]">
                      <BriefcaseBusiness size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        Project task assigned
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Team workspace
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)]">
                      11:00 AM
                    </span>
                  </div>

                </div>

              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-5 -left-3 sm:-left-7 flex items-center gap-3 rounded-[var(--radius-lg)] bg-[var(--white)] border border-[var(--border-color)] p-3 shadow-[var(--shadow-lg)]">
                <div className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-light)] text-[var(--success)]">
                  <CheckCircle2 size={21} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">
                    Everything Connected
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    One unified workspace
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ROLE BASED ACCESS */}
        <div className="mt-28">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-[var(--secondary)]">
              Designed Around Your Organization
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 text-[var(--text-primary)]">
              Three Roles. Three Experiences.
            </h3>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Every user gets a dedicated dashboard built around
              their responsibilities, with relevant information,
              tools and permissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {roles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-color)] bg-[var(--white)] p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex justify-between items-center">

                    <div className={`w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center ${item.color}`}>
                      <Icon size={27} />
                    </div>

                    <span className="text-4xl font-extrabold text-[var(--gray-100)]">
                      {item.number}
                    </span>

                  </div>

                  <h4 className="text-xl font-bold mt-7 text-[var(--text-primary)]">
                    {item.role}
                  </h4>

                  <p className="text-sm leading-7 mt-3 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  <div className="border-t border-[var(--border-color)] mt-6 pt-5 space-y-3">

                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[var(--success)]"
                        />
                        {feature}
                      </div>
                    ))}

                  </div>

                  <div className="flex justify-end mt-6">
                    <div className="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* PLATFORM CAPABILITIES */}
        <div className="mt-28 rounded-[var(--radius-2xl)] bg-[var(--navy-900)] p-7 sm:p-10 lg:p-14 relative overflow-hidden">

          <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[var(--secondary)] opacity-10 blur-3xl" />

          <div className="relative z-10">

            <div className="max-w-2xl mb-10">
              <span className="text-sm font-bold tracking-widest uppercase text-[var(--accent)]">
                One Complete Ecosystem
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                Everything Your Organization Needs. In One Place.
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
                From everyday employee activities to organizational
                operations, bring your essential workflows together
                in one structured digital environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-11 h-11 flex items-center justify-center rounded-[var(--radius-md)] ${item.color}`}>
                      <Icon size={22} />
                    </div>

                    <h4 className="text-base font-bold text-white mt-5">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-6 mt-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary-light)] text-[var(--primary)] mb-5">
            <Building2 size={26} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            Your People. Your Projects.
            <span className="block text-[var(--primary)] mt-1">
              Your Entire Organization.
            </span>
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-7 text-[var(--text-secondary)]">
            EMPOWER EMS brings people, processes and productivity
            together to create a more organized and connected workplace.
          </p>

          <a
            href="#features"
            className="btn btn-primary btn-lg mt-7"
          >
            Explore the Platform
            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
