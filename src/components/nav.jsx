
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

  const menuButtonRef = useRef(null);
  const [menuOrigin, setMenuOrigin] = useState({
    x: window.innerWidth - 40,
    y: 40,
  });

  const [menuRadius, setMenuRadius] = useState(150);

  const openMenu = () => {
    const rect = menuButtonRef.current?.getBoundingClientRect();

    if (rect) {
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      setMenuOrigin({ x, y });

      const radius = Math.max(
        Math.hypot(x, y),
        Math.hypot(window.innerWidth - x, y),
        Math.hypot(x, window.innerHeight - y),
        Math.hypot(window.innerWidth - x, window.innerHeight - y)
      );

      setMenuRadius(radius + 50);
    }

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

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsNavbarVisible(true);

      if (setActiveDropdown) setActiveDropdown("menu-open");
    } else {
      document.body.style.overflow = "unset";

      if (setActiveDropdown) setActiveDropdown(null);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, setActiveDropdown]);

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

      {/* OPENED FULL-SCREEN MENU */}
      <div
        className="
    fixed inset-0 z-[100]
    bg-[#0e7428]
    text-white
    flex flex-col
    justify-between
    overflow-y-auto
    no-scrollbar
    transition-[clip-path]
    duration-[850ms]
    ease-[cubic-bezier(0.76,0,0.24,1)]
  "
        style={{
          clipPath: isMenuOpen
            ? `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`
            : `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,

          pointerEvents: isMenuOpen ? "auto" : "none",

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
        <div className="relative z-10 navbar-desktop-container py-3 sm:py-4 lg:py-2.5 flex items-center justify-between shrink-0">
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
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain block brightness-0 invert transition-transform group-hover:scale-[1.02]"
            />
          </a>



          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-6 h-6 flex items-center justify-center text-white hover:rotate-90 hover:opacity-75 transition-all duration-200 focus:outline-none cursor-pointer shrink-0"
          >
            <X className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2] shrink-0" />
          </button>

        </div>

        {/* Content Container */}
        <div
          className={`
 
relative z-10 w-full
px-6 sm:px-10 lg:px-16
flex-1 flex flex-col justify-center
lg:items-center
py-6 sm:py-10


  transition-all duration-500 ease-out

  ${isMenuOpen
              ? "opacity-100 translate-y-0 delay-[450ms]"
              : "opacity-0 translate-y-[30px] delay-0"
            }
`}
        >
          <div className="w-full max-w-[700px] lg:max-w-[900px]">
            <div className="hidden w-full h-[1px] bg-white/40" />

            <nav className="flex flex-col">
              {menuItems.map((item, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <div key={item.label} className="w-full">
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

                      className={`
  block w-full

  py-[8px]
  sm:py-[10px]
  lg:py-[12px]

 


text-[clamp(60px,17vw,76px)]
sm:text-[116px]
lg:text-[clamp(56px,9vh,82px)]
2xl:text-[136px]



  leading-[0.95]
  
tracking-[0.01em]

  font-grift-black

  transition-all duration-200


${isHovered
                          ? "text-white/50 px-1"
                          : "text-white px-1"
                        }

`}

                    >
                      {item.label}
                    </a>

                    <div className="hidden w-full h-[1px] bg-white/40" />
                  </div>
                );
              })}
            </nav>

            {/* Existing Contact Us section preserved */}
            {/* <div className="pt-6 sm:pt-8">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-white text-slate-900 hover:text-black font-bold text-[16px] sm:text-[18px] py-3.5 px-6 sm:px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-slate-100 hover:scale-[1.01] transition-all duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="relative z-10 h-6 sm:h-10 shrink-0" />
      </div>
    </>
  );
}
