import "./App.css";
import SignUpPage from "./authentication/SignUpPage.js";
import SignInPage from "./authentication/SignInPage.js";
import MaterialUI from "./MaterialUI.js";
// import { AuthProvider } from "./context/AuthContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <SignUpPage /><MaterialUI/>
                </>
              }
            />
            <Route
              exact
              path="/SignInPage"
              element={
                <>
                  <SignInPage />
                </>
              }
            />
          </Routes>
        </Router>
  );
}

export default App;
