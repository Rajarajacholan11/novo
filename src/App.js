import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Profile from "./pages/Profile";
import QRPage from "./pages/QRPage";

function App() {
  return (
    <Router basename="/novo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qr" element={<QRPage />} />

      </Routes>
    </Router>
  );
}

export default App;
