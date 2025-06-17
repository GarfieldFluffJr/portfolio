import type { ReactNode } from "react";

import ProgressBar from "../components/ProgressBar";
import Navigation from "../components/Navigation";

// Make navbar, which is horizontal at first, but upon scroll, animate to side dropdown menu
export default function AppLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="relative">
      <ProgressBar />
      <Navigation />
      <div>{children}</div>
    </div>
  );
}
