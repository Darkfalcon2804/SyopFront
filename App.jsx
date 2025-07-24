import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Header } from "./components/Header.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Journal from "./pages/Journal.jsx";
import Analysis from "./pages/Analysis.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

const App = () => (
  <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-vh-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);

createRoot(document.getElementById("root")).render(<App />);
