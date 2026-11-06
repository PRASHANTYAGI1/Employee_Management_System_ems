import { memo, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

import Mainlogo from "@/assets/Mainlogo.png";
import video2 from "@/assets/video2.mp4";

// Static data lives outside the component, so it is created once.
const CURRENT_YEAR = new Date().getFullYear();

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Attendance", href: "#features" },
  { label: "Leave Management", href: "#features" },
  { label: "Project Management", href: "#features" },
  { label: "Payroll", href: "#features" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "mailto:prashant@gmail.com" },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="footer-heading mb-4 text-xs font-semibold uppercase tracking-wider">
      {title}
    </h3>
    <ul className="space-y-2.5">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a href={href} className="footer-link text-sm">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const videoRef = useRef(null); // plain JS: no TypeScript generic in a .jsx file

  // Play only while visible, pause otherwise. Skipped for reduced-motion users.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className="site-footer">
      {/* Video */}
      <section className="footer-video-wrap relative w-full overflow-hidden">
        <div className="relative flex aspect-video min-h-[220px] max-h-[500px] w-full items-center justify-center sm:min-h-[320px] lg:min-h-[420px]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            src={video2}
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
            aria-hidden="true"
            tabIndex={-1}
          />

          <div className="footer-video-overlay pointer-events-none absolute inset-0" />

          <div className="pointer-events-none absolute bottom-6 left-6 z-10 sm:bottom-10 sm:left-10 lg:left-12">
            <span className="footer-eyebrow text-[11px] font-medium uppercase tracking-[0.25em]">
              EMPOWER EMS
            </span>
            <p className="footer-tagline mt-1 text-lg font-medium tracking-tight sm:text-xl">
              Work smarter. Together.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="footer-divider grid gap-10 border-b py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#home" className="group inline-flex items-center">
              <img
                src={Mainlogo}
                alt="EMPOWER EMS"
                loading="lazy"
                decoding="async"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="footer-text mt-4 max-w-sm text-sm leading-relaxed">
              One intelligent platform to manage your people, projects,
              attendance, and everyday business operations with absolute clarity.
            </p>
          </div>

          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="footer-muted text-xs">
            © {CURRENT_YEAR} EMPOWER EMS. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-link group inline-flex items-center gap-2 text-xs"
          >
            Back to top
            <span className="footer-top-icon rounded-full p-1 transition-transform group-hover:-translate-y-0.5">
              <ChevronUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);