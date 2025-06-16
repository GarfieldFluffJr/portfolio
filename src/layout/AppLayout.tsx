import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

// Make navbar, which is horizontal at first, but upon scroll, animate to side dropdown menu
export default function AppLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <>
        {!scrolled ? (
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        ) : (
          <div className="fixed top-0 left-0 h-full bg-white z-50 shadow-lg group transition-all duration-300">
            <div className="w-12 group-hover:w-48 h-full flex flex-col items-center group-hover:items-start px-2 py-4 overflow-hidden">
              <div className="text-lg font-bold mb-6">
                <Menu /> menu
              </div>
              <div className="flex flex-col gap-4">
                <NavLink className="hover:underline whitespace-nowrap" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="hover:underline whitespace-nowrap"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="hover:underline whitespace-nowrap"
                  to="/projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className="hover:underline whitespace-nowrap"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </>
      <div>{children}</div>
    </div>
  );
}
