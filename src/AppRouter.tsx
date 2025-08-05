import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { AboutHome as About } from "./pages/About/About";
// import { SwimHome as Swim } from "./pages/Swim/Swim";
// import { ProjectsHome as Projects } from "./pages/Projects/Projects";
// import { ContactHome as Contact } from "./pages/Contact/Contact";
import { ResumeHome as Resume } from "./pages/Resume/Resume";

import NotFound from "./ui/404NotFound";
import ScrollToTop from "./ui/ScrollToTop";
import UnderConstruction from "./ui/UnderConstruction";

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
                  <UnderConstruction />
                </AppLayout>
              }
            />
            <Route
              path="swim"
              element={
                <AppLayout title="Swim">
                  <UnderConstruction />
                </AppLayout>
              }
            />
            <Route
              path="contact"
              element={
                <AppLayout title="Contact">
                  <UnderConstruction />
                </AppLayout>
              }
            />
            <Route
              path="resume"
              element={
                <AppLayout title="Resume">
                  <Resume />
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
