import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

import ProgressBar from "../components/ProgressBar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AppLayout({
  children,
  title,
}: Readonly<{ children: ReactNode; title: string }>) {
  const location = useLocation();

  useEffect(() => {
    document.title = `Louie Yin | ${title}`;
  }, [title]);

  useEffect(() => {
    // Apply swim page styling to body
    if (
      location.pathname === "/swim" ||
      location.pathname.startsWith("/swim/")
    ) {
      document.body.classList.add("swimPage");
    } else {
      document.body.classList.remove("swimPage");
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("swimPage");
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      <ProgressBar />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
