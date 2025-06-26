import { useEffect, type ReactNode } from "react";

import ProgressBar from "../components/ProgressBar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AppLayout({
  children,
  title,
}: Readonly<{ children: ReactNode; title: string }>) {
  useEffect(() => {
    document.title = `Louie Yin | ${title}`;
  }, [title]);

  return (
    <div className="relative">
      <ProgressBar />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
