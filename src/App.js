import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/components/screens/homeScreen/HomeScreen";
import NavigationBar from "./components/organisms/navigationBar/NavigationBar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
