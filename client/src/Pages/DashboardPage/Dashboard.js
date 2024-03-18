import React from "react";
import "./Dashboard.css";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import Section from "./Section";

const Dashboard = () => {
  return (
    <div class="container">
      <Nav />
      <Section />
    </div>
  );
};

export default Dashboard;
