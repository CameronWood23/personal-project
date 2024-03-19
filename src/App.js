import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/homePage/HomePage";
import NavigationBar from "./components/organisms/navigationBar/NavigationBar";
import AuthenticationPage from "../src/pages/authenticationPage/AuthenticationPage";
import ShopPage from "../src/pages/shopPage/ShopPage";
import CheckoutPage from "../src/pages/checkoutPage/CheckoutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route path="auth" element={<AuthenticationPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
