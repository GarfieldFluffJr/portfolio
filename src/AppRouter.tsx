import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutHome as About } from "./pages/About";
import { ProjectsHome as Projects } from "./pages/Projects";
import { ContactHome as Contact } from "./pages/Contact";

import NotFound from "./ui/404NotFound";

import AppLayout from "./layout/AppLayout";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <AppLayout>
                  <Home />
                </AppLayout>
              }
            />
            <Route
              path="about"
              element={
                <AppLayout>
                  <About />
                </AppLayout>
              }
            />
            <Route
              path="projects"
              element={
                <AppLayout>
                  <Projects />
                </AppLayout>
              }
            />
            <Route
              path="contact"
              element={
                <AppLayout>
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
