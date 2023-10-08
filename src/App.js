import HomePage from "./pages/Home/HomePage";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
