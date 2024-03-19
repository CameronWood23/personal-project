import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/organisms";
import {AuthenticationPage, CheckoutPage, HomePage, ShopPage} from "./pages"

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
