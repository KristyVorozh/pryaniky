import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import MissingRoute from "./pages/MissingRoute/MissingRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="profile">
          <Route index element={<Profile />} />
        </Route>

        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
