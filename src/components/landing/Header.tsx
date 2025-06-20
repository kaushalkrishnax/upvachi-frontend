import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import upvachiLogo from "../../assets/images/upvachi.png";

const HERO_HEIGHT = 700;

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Platforms", href: "#platforms" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq"}
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < HERO_HEIGHT - 64) {
            setShow(false);
          } else {
            setShow(
              currentScrollY < lastScrollY || currentScrollY < HERO_HEIGHT
            );
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (window.scrollY > HERO_HEIGHT - 64) setShow(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full fixed top-0 z-30 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`
          mx-auto px-4 flex justify-between items-center h-16 bg-[#101726]/90 border-b border-[#232347]
          backdrop-blur-md
          transition-colors duration-300
        `}
      >
        <a href="/" className="flex items-center gap-2">
          <img
            src={upvachiLogo}
            alt="UpVachi Logo"
            className="w-10 h-10 rounded-xl border border-gray-800 shadow"
          />
          <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#cccccc] via-[#3069e4] to-[#c44881] drop-shadow-lg">
            UpVachi
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium transition text-gray-200 hover:text-[#35A7FF]"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="/register"
            className="ml-4 px-5 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-all bg-gradient-to-r from-[#1d81ce] to-[#f1560e] text-white"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="ml-4 px-2 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-all text-white"
          >
            Sign In
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl transition hover:bg-[#232347]/40"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>
      </nav>
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#101726]/90 border-t shadow-xl px-4 pb-4 pt-2 absolute w-full z-40">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium py-2 transition hover:text-[#35A7FF]"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/register"
              className="w-full px-5 py-2 rounded-xl bg-gradient-to-r from-[#35A7FF] to-[#824DFF] text-white font-bold shadow-md text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
