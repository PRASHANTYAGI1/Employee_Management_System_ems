
import React from "react";
import {
  Star,
  Quote,
  ArrowUpRight,
  Users,
  Building2,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "HR Manager",
    company: "Sample Technology Company",
    initials: "AS",
    rating: 5,
    category: "HR MANAGEMENT",
    feedback:
      "Having employee records, attendance, leave applications and HR activities organized in one place makes everyday workforce management much easier. The dedicated HR dashboard gives us a clearer view of pending activities.",
    avatarColor: "bg-[var(--primary-light)] text-[var(--primary)]",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer",
    company: "Sample Digital Solutions",
    initials: "PV",
    rating: 5,
    category: "EMPLOYEE EXPERIENCE",
    feedback:
      "I like having access to my attendance, leave information, project assignments and salary records from one dashboard. It makes it easier to stay updated without switching between different tools.",
    avatarColor: "bg-[var(--success-light)] text-[var(--success-dark)]",
  },
  {
    name: "Rahul Mehta",
    role: "Company Administrator",
    company: "Sample Business Group",
    initials: "RM",
    rating: 5,
    category: "ORGANIZATION MANAGEMENT",
    feedback:
      "The idea of having a centralized view of employees, projects, expenses and organizational activities is very useful. The role-based dashboards also help keep information relevant to each responsibility.",
    avatarColor: "bg-[var(--secondary-light)] text-[var(--secondary)]",
  },
  {
    name: "Sneha Gupta",
    role: "HR Executive",
    company: "Sample Corporate Services",
    initials: "SG",
    rating: 5,
    category: "WORKFORCE OPERATIONS",
    feedback:
      "Managing leave requests, employee documents and internal records through a structured workspace can simplify several repetitive HR activities. The organized workflow is a great concept.",
    avatarColor: "bg-[var(--info-light)] text-[var(--info)]",
  },
  {
    name: "Vikram Singh",
    role: "Project Team Member",
    company: "Sample IT Solutions",
    initials: "VS",
    rating: 5,
    category: "PROJECT MANAGEMENT",
    feedback:
      "The project board concept makes it easier to understand assigned work, deadlines and task progress. Having team communication and project tracking together is especially helpful.",
    avatarColor: "bg-[var(--warning-light)] text-[var(--warning-dark)]",
  },
];

const TestimonialCard = ({ item, featured = false }) => {
  return (
    <article
      className={`relative flex flex-col h-full rounded-[var(--radius-xl)] border border-[var(--border-color)] bg-[var(--white)] p-6 sm:p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 ${
        featured ? "lg:p-9" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">

        <span className="text-[10px] font-bold tracking-widest text-[var(--secondary)]">
          {item.category}
        </span>

        <Quote
          size={featured ? 34 : 27}
          className="text-[var(--primary-light)] shrink-0"
        />

      </div>

      <div className="flex items-center gap-1 mt-5">
        {Array.from({ length: item.rating }).map((_, index) => (
          <Star
            key={index}
            size={15}
            fill="var(--warning)"
            className="text-[var(--warning)]"
          />
        ))}
      </div>

      <p
        className={`mt-5 leading-8 text-[var(--text-secondary)] ${
          featured ? "text-base sm:text-lg" : "text-sm"
        }`}
      >
        "{item.feedback}"
      </p>

      <div className="flex items-center gap-3 mt-auto pt-7 border-t border-[var(--border-light)]">

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${item.avatarColor}`}
        >
          {item.initials}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
            {item.name}
          </h4>
          <p className="text-xs text-[var(--text-secondary)] mt-1 truncate">
            {item.role}
          </p>
          <p className="text-[10px] text-[var(--text-muted)] mt-1 truncate">
            {item.company}
          </p>
        </div>

        <ShieldCheck
          size={19}
          className="text-[var(--secondary)] shrink-0"
        />

      </div>
    </article>
  );
};

const TestimonialsSection = () => {
  const featured = testimonials[0];
  const remaining = testimonials.slice(1);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[var(--white)] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-body)] px-4 py-2 mb-5">
            <MessageSquareQuote
              size={16}
              className="text-[var(--primary)]"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--primary)]">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--text-primary)]">
            Built for People.
            <span className="block mt-2 text-transparent bg-clip-text bg-[var(--gradient-brand)]">
              Designed for Better Workplaces.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-[var(--text-secondary)]">
            A better workplace starts with better organization.
            Discover how a unified employee management experience
            can make everyday work simpler for everyone.
          </p>

        </div>

        {/* FEATURED TESTIMONIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">

          {/* LEFT FEATURED PANEL */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--navy-900)] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">

            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--secondary)] opacity-20 blur-3xl" />

            <div className="relative z-10">

              <Sparkles size={29} className="text-[var(--accent)]" />

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-8 leading-tight">
                Better Organization.
                <span className="block text-[var(--accent)] mt-1">
                  Better Collaboration.
                </span>
              </h3>

              <p className="text-sm leading-7 text-slate-300 mt-5">
                Bring people, processes and everyday company operations
                together through one connected workforce platform.
              </p>

            </div>

            <div className="relative z-10 flex items-center gap-3 mt-10">

              <div className="flex -space-x-3">
                {["A", "P", "R", "S"].map((letter, index) => (
                  <div
                    key={letter}
                    className="w-10 h-10 rounded-full border-2 border-[var(--navy-900)] bg-[var(--white)] text-[var(--primary)] flex items-center justify-center text-xs font-bold"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <span className="text-xs text-slate-300">
                Designed for every role in your organization
              </span>

            </div>

          </div>

          {/* FEATURED REVIEW */}
          <div className="lg:col-span-3">
            <TestimonialCard item={featured} featured />
          </div>

        </div>

        {/* OTHER TESTIMONIALS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {remaining.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}

        </div>

        {/* BOTTOM PLATFORM HIGHLIGHTS */}
        <div className="mt-20 rounded-[var(--radius-2xl)] border border-[var(--border-color)] bg-[var(--bg-body)] p-7 sm:p-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)]">
                  People First
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Built around employee needs.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--success-light)] flex items-center justify-center text-[var(--success)] shrink-0">
                <Building2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)]">
                  One Organization
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Connected company operations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--secondary-light)] flex items-center justify-center text-[var(--secondary)] shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)]">
                  Role-Based Experience
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Dedicated access and workflows.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* FINAL MESSAGE */}
        <div className="text-center mt-20 max-w-2xl mx-auto">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            Great Workplaces Start With
            <span className="block text-[var(--primary)] mt-1">
              Connected Teams.
            </span>
          </h3>

          <p className="text-sm sm:text-base leading-7 text-[var(--text-secondary)] mt-4">
            Give your people the tools they need to work,
            collaborate and grow together.
          </p>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
