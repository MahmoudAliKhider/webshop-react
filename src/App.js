import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from './components/Uitily/Footer';

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

import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";

import AdminEditProductsPage from "./pages/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./pages/Auth/VerifyPasswordPage";
import RsetPasswordPage from "./pages/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";

import ProtectedRoute from './components/Uitily/ProtectedRoute';

import ProtectedRouteHook from './hook/auth/protected-route-hook';
import ProductsByCategory from "./pages/Product/ProductsByCategory";
import ProductsByBrand from "./pages/Product/ProductsByBrand";
import ChoosePayMethoudPage from "./pages/Checkout/ChossePaymentPage";

function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

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
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<RsetPasswordPage />} />
          <Route path="/products/category/:id" element={<ProductsByCategory />} />
          <Route path="/products/brand/:id" element={<ProductsByBrand />} />

          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
            <Route path="admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
            <Route path="admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="admin/addproduct" element={<AdminAddProductsPage />} />

            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="user/allorders" element={<UserAllOrdersPage />} />
            <Route path="order/paymethoud" element={<ChoosePayMethoudPage />} />
            <Route path="user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="user/addresses" element={<UserAllAddresPage />} />
            <Route path="user/add-address" element={<UserAddAddressPage />} />
            <Route path="user/edit-address/:id" element={<UserEditAddressPage />} />
            <Route path="user/profile" element={<UserProfilePage />} />
          </Route>


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
