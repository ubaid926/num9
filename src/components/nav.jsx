
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import logo from "../assets/logoGreen.webp";
import whiteLogo from "../assets/logoWhite.webp";
import menuIcon from "../assets/navMenu.png";
import ThemeToggle from "./ThemeToggle";
export default function AppNav({
  activeDropdown,
  setActiveDropdown,
  onNavigate,
  currentPage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const menuOverlayRef = useRef(null);
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
    // First commit the correct circle origin at radius 0, then open on the next
    // frames so only the radius animates (no jump / sudden fill).
    updateMenuDimensions();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsMenuOpen(true));
    });
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHomePage = React.useMemo(() => {
    if (currentPage !== undefined && currentPage !== null) {
      return currentPage === "home" || currentPage === "" || currentPage === "/";
    }
    if (typeof window !== "undefined") {
      const pathname = (window.location.pathname || "").replace(/^\/+|\/+$/g, "").toLowerCase();
      if (pathname && pathname !== "home") return false;
      const params = new URLSearchParams(window.location.search);
      const queryPage = (params.get("page") || "").toLowerCase();
      if (queryPage && queryPage !== "home") return false;
      return true;
    }
    return true;
  }, [currentPage]);

  const isTransparentOnMobile =
    isMobile && isHomePage && !isScrolled && !isMenuOpen;

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

  // Lock page scroll WITHOUT hiding the scrollbar, so the layout never shifts
  // (hiding the scrollbar via overflow:hidden caused a horizontal jerk).
  useEffect(() => {
    if (!isMenuOpen) return;

    setIsNavbarVisible(true);
    const overlay = menuOverlayRef.current;

    const overlayCanScroll = (deltaY) => {
      if (!overlay || overlay.scrollHeight <= overlay.clientHeight) return false;
      if (deltaY > 0) return overlay.scrollTop + overlay.clientHeight < overlay.scrollHeight - 1;
      if (deltaY < 0) return overlay.scrollTop > 0;
      return false;
    };

    const onWheel = (e) => {
      if (!(overlay && overlay.contains(e.target) && overlayCanScroll(e.deltaY))) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e) => {
      const y = e.touches[0]?.clientY ?? 0;
      const deltaY = touchStartY - y;
      if (!(overlay && overlay.contains(e.target) && overlayCanScroll(deltaY))) {
        e.preventDefault();
      }
    };

    const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Spacebar"];
    const onKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      if (scrollKeys.includes(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
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
        setIsScrolled(currentScrollY > 20);
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
    { label: "Work", href: "/work", isPage: "work" },
    { label: "Clients", href: "/our-work", isPage: "our-work" },
    { label: "Contact", href: "/contact", isPage: "contact" },
  ];

  return (
    <>
      {/* Navbar height spacer to prevent content jumping & ensure empty space behind navbar on all non-home pages */}
      <div
        className={`w-full shrink-0 ${
          isHomePage
            ? "hidden sm:block sm:h-[92px] lg:h-[84px]"
            : "h-[72px] sm:h-[92px] lg:h-[84px] bg-white dark:bg-[#0B0D0C] transition-colors duration-300"
        }`}
        aria-hidden="true"
      />

      {/* CLOSED NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out
          ${isNavbarVisible || isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
          }
          ${
            isTransparentOnMobile
              ? "bg-transparent border-transparent"
              : "bg-white/95 dark:bg-[#0B0D0C]/95 backdrop-blur-md border-b border-black/5 dark:border-[#202722] shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
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

          {/* Right: Schedule a Call + ThemeToggle + Hamburger */}
          <div className="flex items-center">
            <ThemeToggle
              variant="navbar"
              className={`mr-2 sm:mr-4 ${
                isTransparentOnMobile
                  ? "!bg-black/40 !border-white/40 !text-white"
                  : ""
              }`}
            />

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("contact");
              }}
              className={`nav-schedule-call-btn px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full border-[1.5px] text-[12px] sm:text-[15px] font-semibold transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] whitespace-nowrap mr-2.5 sm:mr-5 ${
                isTransparentOnMobile
                  ? "border-white/40 text-white bg-black/40 backdrop-blur-sm hover:border-white"
                  : "border-slate-300 dark:border-[#28322B] bg-white dark:bg-[#171A18] hover:border-slate-900 dark:hover:border-[#15B83E] hover:text-black dark:hover:text-white text-black dark:text-[#E5E7EB]"
              }`}
            >
              Schedule a Call
            </a>

            <button
              ref={menuButtonRef}
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="nav-toggle-btn nav-toggle-btn--open relative w-6 h-6 flex items-center justify-center focus:outline-none cursor-pointer shrink-0"
            >
              <span className="nav-toggle-blob" aria-hidden="true" />
              <img
                src={menuIcon}
                alt=""
                className={`nav-toggle-icon w-6 h-6 object-contain transition-all ${
                  isTransparentOnMobile ? "brightness-0 invert" : "dark:invert"
                }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* OPENED FULL-SCREEN MENU */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-[100] h-[100dvh] max-h-[100dvh] bg-[#0e7428] text-white flex flex-col justify-between overflow-y-auto no-scrollbar overscroll-contain"
        style={{
          clipPath: isMenuOpen
            ? `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`
            : `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
          WebkitClipPath: isMenuOpen
            ? `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`
            : `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,

          // Smooth ease-out when opening, gentle ease-in when closing
          transition: isMenuOpen
            ? "clip-path 800ms cubic-bezier(0.33, 1, 0.68, 1), -webkit-clip-path 800ms cubic-bezier(0.33, 1, 0.68, 1)"
            : "clip-path 600ms cubic-bezier(0.32, 0, 0.67, 0), -webkit-clip-path 600ms cubic-bezier(0.32, 0, 0.67, 0)",
          WebkitTransition: isMenuOpen
            ? "clip-path 800ms cubic-bezier(0.33, 1, 0.68, 1), -webkit-clip-path 800ms cubic-bezier(0.33, 1, 0.68, 1)"
            : "clip-path 600ms cubic-bezier(0.32, 0, 0.67, 0), -webkit-clip-path 600ms cubic-bezier(0.32, 0, 0.67, 0)",

          pointerEvents: isMenuOpen ? "auto" : "none",
          willChange: "clip-path",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          overscrollBehavior: "contain",
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

        {/* Close button pinned to the hamburger's exact centre (overlay = viewport) */}
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="nav-toggle-btn nav-toggle-btn--close absolute z-20 w-6 h-6 flex items-center justify-center focus:outline-none cursor-pointer"
          style={{
            left: `${menuOrigin.x - 12}px`,
            top: `${menuOrigin.y - 12}px`,
          }}
        >
          <span className="nav-toggle-blob" aria-hidden="true" />
          <X className="nav-toggle-icon w-6 h-6 stroke-[2.2] shrink-0" />
        </button>

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

          {/* Spacer keeps the header row layout; the real X button is pinned
              to the exact centre of the hamburger so it never shifts. */}
          <span className="w-6 h-6 shrink-0" aria-hidden="true" />

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



        {/* Bottom row: Theme switcher left, social links right */}
        <div className="relative z-10 w-full navbar-desktop-container pb-4 sm:pb-5 lg:pb-6 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-8">
            {/* Theme Switcher inside Fullscreen Menu */}
            <div className="shrink-0">
              <ThemeToggle variant="menu" />
            </div>

            {/* Social links in place of the old bottom-right Contact button */}
            <div className="flex flex-wrap items-center justify-start sm:justify-end gap-x-5 gap-y-4 sm:gap-x-7 lg:gap-x-10">
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
                    text-[16px] sm:text-[19px] lg:text-[24px] xl:text-[26px]
                    font-bold tracking-[0.12em] uppercase
                    pb-1.5 transition-opacity duration-200 hover:opacity-60
                    after:content-[''] after:absolute after:left-0
                    after:bottom-0 after:h-[1px] after:w-[26px] after:bg-white/50
                  "
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
