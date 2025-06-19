import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutHome as About } from "./pages/About";
import { ProjectsHome as Projects } from "./pages/Projects";
import { ContactHome as Contact } from "./pages/Contact";

import NotFound from "./ui/404NotFound";
import ScrollToTop from "./ui/ScrollToTop";

import AppLayout from "./layout/AppLayout";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <AppLayout title="Home">
                  <Home />
                </AppLayout>
              }
            />
            <Route
              path="about"
              element={
                <AppLayout title="About">
                  <About />
                </AppLayout>
              }
            />
            <Route
              path="projects"
              element={
                <AppLayout title="Projects">
                  <Projects />
                </AppLayout>
              }
            />
            <Route
              path="contact"
              element={
                <AppLayout title="Contact">
                  <Contact />
                </AppLayout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
