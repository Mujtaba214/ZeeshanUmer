// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndustriesSection } from "./components/IndustriesSection";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { Home } from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          {/* Add this for debugging */}
          <Route
            path="*"
            element={
              <div>404 - Route not found: {window.location.pathname}</div>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
