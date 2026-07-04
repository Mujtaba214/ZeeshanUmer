// App.js or Router configuration
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;