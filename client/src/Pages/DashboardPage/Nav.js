import React from 'react'
import "./Dashboard.css"
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <div>
        <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <nav>
        <ul>
          <li>
            <a href="#" class="logo">
              <span class="nav-item">Dashboard</span>
            </a>
          </li>
          <Link to="/dashboard">
          <li>
            <a href="#">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          </Link>
          <li>
            <a href="">
              <i class="fas fa-user"></i>
              <span class="nav-item">Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-th-list"></i>
              <span class="nav-item">Templates</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a href="" class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </a>
          </li>
        </ul>
        </nav>
        </div>
    );
};