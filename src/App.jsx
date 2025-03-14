import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Whishlists from "./pages/wishlists/Wishlists.jsx";
import WhishlistsEmpty from "./pages/wishlists/WishlistsEmpty.jsx";
import Footer from "./components/footer/Footer.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Soon from "./pages/soon/Soon.jsx";
import Account from "./pages/account/Account.jsx";
import CartEmpty from "./pages/cart/CartEmpty.jsx";
import CompareEmpty from "./pages/compare/CompareEmpty.jsx";
import Login from "./pages/login/Login.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Shop from "./pages/shop/Shop.jsx";
function App() {
  useEffect(() => {
    AOS.init();
    
  }, []);
  const location = useLocation();
  const specialLocation = location.pathname === "/soon";
  return (
    <>
      {!specialLocation && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Whishlists />} />
        <Route path="/wishlist-empty" element={<WhishlistsEmpty />} />
        <Route path="/soon" element={<Soon />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/cart-empty" element={<CartEmpty />} />
        <Route path="/compare-empty" element={<CompareEmpty />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/my-account/*" element={<Account />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {!specialLocation && <Footer />}
    </>
  );
}

export default App;
