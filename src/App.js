import HomePage from "./pages/Home/HomePage";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
