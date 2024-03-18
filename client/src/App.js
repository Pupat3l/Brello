import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
import BoardPage from "./Pages/BoardPage/BoardPage";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import "./App.css";
/*import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/LoginButton";*/
/*import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';**/

const App = () => {
  /*const { isAuthenticated } =useAuth0();
  console.log(isAuthenticated);
  const {isLoading, error} = useAuth0();
  if (isLoading) return <div>Loading....</div>
  if (error) return <div>Authentication error</div>*/

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

