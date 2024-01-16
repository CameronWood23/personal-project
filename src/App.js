import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/components/screens/homeScreen/HomeScreen";
import NavigationBar from "./components/organisms/navigationBar/NavigationBar";
import AuthenticationScreen from "./components/screens/authenticationScreen/AuthenticationScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomeScreen />} />
        <Route path="auth" element={<AuthenticationScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
