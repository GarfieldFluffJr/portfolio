import type { ReactNode } from "react";

import ProgressBar from "../components/ProgressBar";
import Navigation from "../components/Navigation";

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
