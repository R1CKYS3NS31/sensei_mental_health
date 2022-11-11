import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GetHelp from "./pages/getHelp/GetHelp";
import { Home } from "./pages/home/Home";
import SignInSide from "./pages/signIn/SignInSide";
import SignUp from "./pages/signUp/SignUp";
import { Specialists } from "./pages/specialists/Specialists";

function App() {
  const [disorders, setDisorders] = useState([]);
  const [psychiatrists, setPsychiatrists] = useState([]);

  // get disorders
  const getDisorders = async () => {
    try {
      const res = await fetch("http://localhost:8000/disorder");
      const disordersData = await res.json();
      // console.log(disordersData);
      setDisorders(disordersData);
    } catch (error) {
      console.error(error);
    }
  };
  // get psychiatrists
  const getPsychiatrists = async () => {
    try {
      const res = await fetch("http://localhost:8000/psychiatrist");
      const psychiatristData = await res.json();
      // console.log(psychiatristData);
      setPsychiatrists(psychiatristData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDisorders();
    getPsychiatrists();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home disorders={disorders} />} exact />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route
          path="/specialists"
          element={<Specialists psychiatrists={psychiatrists} />}
        />
        <Route path="/gethelp" element={<GetHelp disorders={disorders} psychiatrists={psychiatrists} />} />

        {/* no route */}
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>There's nothing here!</h1>
              <Link to={"/"}>
                <button
                  style={{
                    textDecoration: "none",
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Go Back Home
                </button>
              </Link>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
