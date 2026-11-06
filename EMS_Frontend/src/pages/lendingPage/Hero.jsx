import React from "react";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Users,
} from "lucide-react";
import image from '@/assets/image (2).png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--navy-950)] text-white pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Ambient background glows for luxury underwater feel */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-7 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-300 tracking-wider">
                Smart Workforce Management
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
              Manage Your Team
              <br />
              Without Any
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-cyan-300 to-teal-200">
                Chaos.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300/80">
              Empower your organization with one intelligent platform.
              Manage employees, track attendance, streamline projects,
              handle payroll, and keep your entire team connected —
              all from one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-9 w-full sm:w-auto">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-xl w-full sm:w-auto group"
              >
                Login 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <Play size={16} className="text-[var(--accent)]" />
                Explore Features
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mt-10">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-emerald-400" />
                All-in-One Platform
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Role-Based Access
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center min-w-0">

            {/* Background Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />

            {/* Dashboard Image Card */}
            <div className="relative z-10 w-full rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-xl p-3 shadow-2xl">
              <img
                src={image}
                alt="EMPOWER EMS Dashboard"
                className="w-full h-auto rounded-xl object-contain shadow-md"
              />
            </div>

            {/* Attendance Floating Card */}
            <div className="absolute z-20 -left-4 sm:-left-8 top-12 sm:top-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-[var(--navy-950)]/80 backdrop-blur-xl p-3.5 sm:p-4 shadow-2xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Today's Attendance
                </p>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  92% Present
                </h4>
              </div>
            </div>

            {/* Employee Floating Card */}
            <div className="absolute z-20 -right-3 sm:-right-8 bottom-10 sm:bottom-16 flex items-center gap-3 rounded-2xl border border-white/15 bg-[var(--navy-950)]/80 backdrop-blur-xl p-3.5 sm:p-4 shadow-2xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                <Users size={20} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Active Employees
                </p>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  128 Members
                </h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;