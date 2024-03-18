import React from 'react';
import "./Dashboard.css";
import {Link} from "react-router-dom";

export default function Section(){
    return(
        <section class="main">
        <section class="main-course">
          <h1>My Workspaces</h1>
          <div class="course-box">
            <ul>
              <li class="active">My Boards</li>
              <li>Views</li>
              <li>Board Settings</li>
            </ul>
            <div class="course">
              <div class="box">
                <h3 class="box-head">Board 1</h3>
                <button>select</button>
                <button>rename</button>
                <button>add members</button>
              </div>
              <div class="box">
                <h3 class="box-head">Board 2</h3>
                <button>select</button>
                <button>rename</button>
                <button>add members</button>
              </div>
              <div class="new-box">
                <h3 class="box-head">Create New Board</h3>
                <Link className="link" to="/board"><button>+</button></Link>
                <button>add members</button>
              </div>
            </div>
          </div>
        </section>

        <section class="main-tasks">
          <h1>My Tasks</h1>
          <div class="course-box">
            <ul>
              <li class="active">In Progress</li>
              <li>Completed</li>
            </ul>
            <div class="course">
              <div class="box">
                <h3 class="box-head">Doing</h3>
                <ul class="vertical-list">
                  <li>These</li>
                  <li>Are</li>
                  <li>Some</li>
                  <li>Tasks</li>
                </ul>
              </div>
              <div class="box">
                <h3 class="box-head">To-Do</h3>
                <ul class="vertical-list">
                  <li>These</li>
                  <li>Are</li>
                  <li>More</li>
                  <li>Tasks</li>
                </ul>
              </div>
              <div class="box">
                <h3 class="box-head">Backlog</h3>
                <ul class="vertical-list">
                  <li>Should</li>
                  <li>Have</li>
                  <li>Done</li>
                  <li>These</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
};