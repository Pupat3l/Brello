// Board component
import React from "react";
import Board from "../../components/Board/Board";
import Nav from "../DashboardPage/Nav";
import "./BoardPage.css";

export default function BoardPage() {
  return (
    <div className="container">
      <Nav />
      <Board />
    </div>
  );
}
