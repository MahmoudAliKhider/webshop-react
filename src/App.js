import HomePage from "./pages/Home/HomePage";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrand from "./pages/Brand/AllBrandPage";
import ShopProductsPage from "./pages/Product/ShopProductPage";
import ProductDetalisPage from "./pages/Product/ProductDetalisPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethoud from "./components/Checkout/ChoosePayMethoud";

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
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/product/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoud />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
