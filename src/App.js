import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import SignInSide from "./pages/signIn/SignInSide";
import SignUp from "./pages/signUp/SignUp";
import { Specialists } from "./pages/specialists/Specialists";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignInSide/>}></Route>
        <Route path="/specialists" element={<Specialists/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
