import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer';
import ChoosePayMethoud from "./components/Checkout/ChoosePayMethoud";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrand from "./pages/Brand/AllBrandPage";
import ShopProductsPage from "./pages/Product/ShopProductPage";
import ProductDetalisPage from "./pages/Product/ProductDetalisPage";
import CartPage from "./pages/Cart/CartPage";

import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";

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

          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="admin/allorders" element={ <AdminAllOrdersPage />} />
          <Route path="admin/orders/:id" element={ <AdminOrderDetalisPage />} />
          <Route path="admin/addbrand" element={ <AdminAddBrandPage />} />
          <Route path="admin/addcategory" element={ <AdminAddCategoryPage />} />
          <Route path="admin/addsubcategory" element={ <AdminAddSubCategoryPage />} />
          <Route path="admin/addproduct" element={ <AdminAddProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
