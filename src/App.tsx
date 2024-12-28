import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DocsPage from './pages/DocsPage';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  )
}

export default App
