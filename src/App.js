import { Routes, Route } from "react-router-dom";

import HomeScreen from "../src/components/screens/homeScreen/HomeScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
