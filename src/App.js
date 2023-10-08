import HomePage from "./pages/Home/HomePage";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
