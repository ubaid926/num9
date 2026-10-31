
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import logo from "../assets/logoGreen.webp";
import whiteLogo from "../assets/logoWhite.webp";
import menuIcon from "../assets/navMenu.png";
export default function AppNav({
  activeDropdown,
  setActiveDropdown,
  onNavigate,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollbarCompensation, setScrollbarCompensation] = useState(0);

  const menuButtonRef = useRef(null);
  const [menuOrigin, setMenuOrigin] = useState(() => {
    if (typeof window !== "undefined") {
      return { x: window.innerWidth - 40, y: 40 };
    }
    return { x: 1200, y: 40 };
  });

  const [menuRadius, setMenuRadius] = useState(1800);

  const updateMenuDimensions = () => {
    if (!menuButtonRef.current) return;
    const rect = menuButtonRef.current.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const x = Math.round(rect.left + rect.width / 2);
      const y = Math.round(rect.top + rect.height / 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const radius =
        Math.ceil(
          Math.max(
            Math.hypot(x, y),
            Math.hypot(w - x, y),
            Math.hypot(x, h - y),
            Math.hypot(w - x, h - y)
          )
        ) + 40;

      setMenuOrigin((prev) => {
        if (prev.x === x && prev.y === y) return prev;
        return { x, y };
      });
      setMenuRadius((prev) => {
        if (prev === radius) return prev;
        return radius;
      });
    }
  };

  useEffect(() => {
    updateMenuDimensions();
    const rafId = requestAnimationFrame(updateMenuDimensions);
    window.addEventListener("resize", updateMenuDimensions, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateMenuDimensions);
    };
  }, []);

  const openMenu = () => {
    const sbWidth = typeof window !== "undefined" ? window.innerWidth - document.documentElement.clientWidth : 0;
    setScrollbarCompensation(sbWidth);
    if (sbWidth > 0) {
      document.body.style.paddingRight = `${sbWidth}px`;
    }
    updateMenuDimensions();
    setIsMenuOpen(true);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const lastScrollY = useRef(0);
  const scrollDirectionDistance = useRef(0);
  const ticking = useRef(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock both documentElement and body scroll with scrollbar compensation to eliminate horizontal shifting
  useEffect(() => {
    let unlockTimer = null;

    if (isMenuOpen) {
      const sbWidth = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarCompensation(sbWidth);
      if (sbWidth > 0) {
        document.body.style.paddingRight = `${sbWidth}px`;
      }
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setIsNavbarVisible(true);
    } else {
      // Delay restoring scroll and compensation until the circular shrink animation completes (500ms)
      // This guarantees the layout remains 100% frozen and still while the menu closes
      unlockTimer = setTimeout(() => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        setScrollbarCompensation(0);
      }, 700);
    }

    return () => {
      if (unlockTimer) clearTimeout(unlockTimer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  // Show navbar on scroll up, hide on scroll down
  useEffect(() => {
    lastScrollY.current = Math.max(0, window.scrollY);

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.scrollY);
        const difference = currentScrollY - lastScrollY.current;

        if (isMenuOpen) {
          setIsNavbarVisible(true);
          scrollDirectionDistance.current = 0;
        } else if (currentScrollY <= 20) {
          setIsNavbarVisible(true);
          scrollDirectionDistance.current = 0;
        } else if (Math.abs(difference) > 0) {
          const previousDistance = scrollDirectionDistance.current;

          if (
            (difference > 0 && previousDistance < 0) ||
            (difference < 0 && previousDistance > 0)
          ) {
            scrollDirectionDistance.current = 0;
          }

          scrollDirectionDistance.current += difference;

          // Small scroll movements won't cause flickering
          if (scrollDirectionDistance.current > 8) {
            setIsNavbarVisible(false);
            scrollDirectionDistance.current = 0;
          } else if (scrollDirectionDistance.current < -8) {
            setIsNavbarVisible(true);
            scrollDirectionDistance.current = 0;
          }
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/", isPage: "home" },
    { label: "About Us", href: "/about", isPage: "about" },
    { label: "Services", href: "/services", isPage: "services" },
    { label: "Our Work", href: "/our-work", isPage: "our-work" },
    { label: "Contact", href: "/contact", isPage: "contact" },
  ];

  return (
    <>
      {/* Navbar height spacer to prevent content jumping */}
      <div
        className="w-full h-[64px] sm:h-[92px] lg:h-[84px]"
        aria-hidden="true"
      />

      {/* CLOSED NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 w-full bg-white z-40
          transition-transform duration-300 ease-in-out
          ${isNavbarVisible || isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
          }
        `}
        style={{
          paddingRight: scrollbarCompensation > 0 ? `${scrollbarCompensation}px` : undefined,
        }}
      >
        <div className="navbar-desktop-container py-3 sm:py-4 lg:py-2.5 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate("home");
              }
            }}
            className="flex items-center group focus:outline-none cursor-pointer"
            aria-label="Home"
          >
            <img
              src={logo}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt="Number 9"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain block transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Right: Schedule a Call + Hamburger */}
          <div className="flex items-center">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("contact");
              }}
              className="nav-schedule-call-btn px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border-[1.5px] border-slate-300 text-[13px] sm:text-[15px] font-semibold bg-white hover:border-slate-900 hover:text-black text-black transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] whitespace-nowrap mr-4 sm:mr-6"
            >
              Schedule a Call
            </a>


            <button
              ref={menuButtonRef}
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity focus:outline-none cursor-pointer shrink-0"
            >
              <img
                src={menuIcon}
                alt=""
                className="w-6 h-6 object-contain"
              />
            </button>

          </div>
        </div>
      </header>

      {/* OPENED FULL-SCREEN MENU */}
      <div
        className="fixed inset-0 z-[100] h-[100dvh] max-h-[100dvh] bg-[#0e7428] text-white flex flex-col justify-between overflow-y-auto no-scrollbar overscroll-contain"
        style={{
          clipPath: isMenuOpen
            ? `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`
            : `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
          WebkitClipPath: isMenuOpen
            ? `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`
            : `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,

          transition: "clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1), -webkit-clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1)",
          WebkitTransition: "clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1), -webkit-clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1)",

          pointerEvents: isMenuOpen ? "auto" : "none",
          willChange: "clip-path",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          overscrollBehavior: "contain",
          paddingRight: scrollbarCompensation > 0 ? `${scrollbarCompensation}px` : undefined,
          backgroundImage:
            "linear-gradient(135deg, #0d6b24 0%, #0e7428 50%, #11842e 100%)",
        }}
      >

        {/* Animated Number9 Background Logo */}
        {/* <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src={whiteLogo}
            alt=""
            aria-hidden="true"
            className="w-[85%] sm:w-[70%] lg:w-[60%] max-w-[900px] h-auto object-contain animate-number9-pulse select-none"
          />
        </div> */}

        {/* Top Header Row */}
        <div className="relative z-10 navbar-desktop-container py-2.5 sm:py-3 lg:py-3 flex items-center justify-between shrink-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (onNavigate) {
                onNavigate("home");
              }
            }}
            className="flex items-center group focus:outline-none cursor-pointer"
            aria-label="Home"
          >
            <img
              src={whiteLogo}
              alt="Number 9"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain block brightness-0 invert transition-transform group-hover:scale-[1.02]"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-6 h-6 flex items-center justify-center text-white hover:rotate-90 hover:opacity-75 transition-all duration-200 focus:outline-none cursor-pointer shrink-0"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2] shrink-0" />
          </button>
        </div>

        {/* Content Container (Left-aligned with logo and social links, zero center shift) */}
        <div className="relative z-10 w-full navbar-desktop-container flex-1 min-h-0 flex flex-col justify-center items-start py-1 sm:py-2 lg:py-2">
          <nav className="flex flex-col items-start w-full">
            {menuItems.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div key={item.label} className="w-full text-left">
                  <a
                    href={item.href || (item.isPage === "home" ? "/" : `/${item.isPage}`)}
                    onClick={(e) => {
                      if (item.isPage && onNavigate) {
                        e.preventDefault();
                        onNavigate(item.isPage);
                      }
                      setIsMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className={`nav-menu-link inline-block text-left tracking-[0.01em] font-grift-black transition-all duration-200 ${isHovered ? "text-white/50" : "text-white"
                      }`}
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>
        </div>



        {/* Bottom Social Links (Static in place) */}
        <div className="relative z-10 w-full navbar-desktop-container pb-4 sm:pb-5 lg:pb-6 shrink-0">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-14">
            {[
              { label: "FACEBOOK", href: "#" },
              { label: "INSTAGRAM", href: "#" },
              { label: "LINKEDIN", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (social.href === "#") e.preventDefault();
                }}
                className="
          relative inline-block
          text-white
          text-[13px] sm:text-[15px] lg:text-[17px]
          font-bold
          tracking-[0.16em]
          uppercase
          pb-1.5
          transition-opacity duration-200
          hover:opacity-60
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:h-[1px]
          after:w-[26px]
          after:bg-white/50
        "
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        {/* Bottom Right Contact Button */}
        <a
          href="/contact"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              setIsMenuOpen(false);
              onNavigate("contact");
            }
          }}

          className="
  relative sm:absolute
  z-20
  w-[calc(100%-30px)] sm:w-auto
  mx-[15px] sm:mx-0
  mb-[15px] sm:mb-0
  bottom-auto sm:bottom-5 lg:bottom-6
  right-auto sm:right-10 lg:right-16
  rounded-full
  
bg-white
text-[#0E7428]
hover:bg-[#E8F5E9]
border border-white

  font-semibold
  text-[16px]
  sm:text-[15px] lg:text-[16px]
  px-6 sm:px-8
  py-[14px] sm:py-3
  text-center
  transition-colors duration-200
  whitespace-nowrap
"

        >
          Contact
        </a>

      </div>
    </>
  );
}
