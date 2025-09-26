import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <canvas id="matrix-bg"></canvas>
      <div id="notification-toast"></div>
      <div id="auth-modal">
        <div className="auth-box">
          <button className="close-modal-btn" id="close-auth-modal">&times;</button>
          <div id="auth-selection" className="auth-selection">
            <h1>Welcome to SmartTrack</h1>
            <p>Please select your login type.</p>
            <button id="show-user-login">User Login</button>
            <button id="show-admin-login">Admin Login</button>
          </div>
          <div id="user-login-container" className="login-form-container">
            <h2 id="user-form-title">User Login</h2>
            <form id="user-login-form" className="login-form">
              <input type="email" id="user-email" placeholder="Email" required />
              <input type="password" id="user-password" placeholder="Password" required />
              <button type="submit" id="user-submit-btn">Login</button>
            </form>
            <p className="form-toggle" id="user-toggle-mode">Don't have an account? Sign Up</p>
            <p className="form-back" data-target="auth-selection">← Back to selection</p>
          </div>
          <div id="admin-login-container" className="login-form-container">
            <h2 id="admin-form-title">Admin Login</h2>
            <form id="admin-login-form" className="login-form">
              <input type="email" id="admin-email" placeholder="Admin Email" required />
              <input type="password" id="admin-password" placeholder="Admin Password" required />
              <button type="submit" id="admin-submit-btn">Login</button>
            </form>
            <p className="form-toggle" id="admin-toggle-mode">Don't have an account? Sign Up</p>
            <p className="form-back" data-target="auth-selection">← Back to selection</p>
          </div>
        </div>
      </div>
      <div id="app-container">
        <header>
          <nav className="container">
            <a href="#" className="logo">&lt;Strikers GX /&gt;</a>
            <ul className="nav-links" id="nav-links">
              <li><a href="#problem">Problem</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#simulation">Simulation</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#team">Team</a></li>
              <li><button id="login-modal-btn">Login / Sign Up</button></li>
              <li><button id="sign-out-btn" className="hidden">Sign Out</button></li>
            </ul>
            <div className="hamburger" id="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <h1>Smart Public Transport Tracker</h1>
              <p>Real-Time Tracking & Management for Emerging Cities // SIH 2025</p>
            </div>
          </section>
          <section id="problem" className="section"></section>
        </main>
      </div>
    </>
  )
}

export default App
