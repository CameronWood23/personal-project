import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/components/screens/homeScreen/HomeScreen";
import NavigationBar from "./components/organisms/navigationBar/NavigationBar";
import AuthenticationScreen from "./components/screens/authenticationScreen/AuthenticationScreen";
import ShopScreen from "./components/screens/shopScreen/ShopScreen";
import CheckoutScreen from "./components/screens/checkoutScreen/CheckoutScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomeScreen />} />
        <Route path='shop/*' element={<ShopScreen />} />
        <Route path="auth" element={<AuthenticationScreen />} />
        <Route path="checkout" element={<CheckoutScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
