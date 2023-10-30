import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/components/screens/homeScreen/HomeScreen";
import NavigationBar from "./components/organisms/navigationBar/NavigationBar";
import SignIn from "./components/screens/signInScreen/SignInScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomeScreen />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
