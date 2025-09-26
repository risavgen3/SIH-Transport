import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: var(--font-body);
            margin: 0;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        #matrix-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.15;
            pointer-events: none;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        header {
            background-color: rgba(13, 17, 23, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1001; 
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 2rem;
            margin: 0;
            padding: 0;
            align-items: center;
        }

        .nav-links a, .nav-links button {
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s ease;
            background: none;
            border: none;
            font-family: var(--font-body);
            font-size: 1rem;
            cursor: pointer;
        }

        .nav-links a:hover, .nav-links button:hover {
            color: var(--primary-color);
        }
        
        .hamburger {
            display: none;
            cursor: pointer;
            flex-direction: column;
            gap: 5px;
        }

        .hamburger .bar {
            width: 25px;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
        }

        /* --- Auth Modal Styles --- */
        #auth-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            z-index: 2000;
            display: none; /* Hidden by default */
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        #auth-modal.show {
            display: flex;
            opacity: 1;
        }
        .auth-box {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 3rem;
            max-width: 400px;
            width: 90%;
            position: relative;
        }
         .close-modal-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            color: var(--text-color);
            background: none;
            border: none;
            cursor: pointer;
        }
        .auth-box h1 {
            font-family: var(--font-heading);
            color: var(--primary-color);
            margin-top: 0;
        }
        .auth-selection button {
            display: block;
            width: 100%;
            padding: 1rem;
            margin: 1rem 0;
            border: 1px solid var(--primary-color);
            background-color: transparent;
            color: var(--primary-color);
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
        }
        .auth-selection button:hover {
            background-color: var(--primary-color);
            color: var(--bg-color);
        }
        .login-form-container {
            display: none; /* Initially hidden */
        }
        .login-form-container.active {
            display: block;
        }
        .login-form input {
            width: 100%;
            padding: 0.8rem;
            margin-bottom: 1rem;
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            color: var(--text-color);
            border-radius: 4px;
            box-sizing: border-box;
            font-family: var(--font-body);
        }
        .login-form button {
            width: 100%;
            padding: 1rem;
            border: none;
            background-color: var(--primary-color);
            color: var(--bg-color);
            font-weight: bold;
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .login-form button:hover {
            opacity: 0.9;
        }
        .form-toggle, .form-back {
            margin-top: 1rem;
            color: var(--secondary-color);
            cursor: pointer;
            text-decoration: underline;
        }

        .hidden {
            display: none !important;
        }

        /* --- Simulation Styles --- */
        .simulation-container {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            position: relative; /* Context for z-index */
            z-index: 1;
        }

        #map-container {
            flex: 3;
            min-width: 300px;
            position: relative;
        }

        #map {
            height: 500px;
            background-color: #222; /* Dark bg for map loading */
            border: 1px solid var(--border-color);
            border-radius: 8px;
            z-index: 1; 
        }
        
        #locate-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 401; 
            background-color: #fff;
            color: #333;
            border: 1px solid #ccc;
            padding: 8px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-family: var(--font-heading);
            transition: all 0.2s ease;
        }
        
        #locate-btn:hover {
            background-color: #f4f4f4;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            70% { transform: scale(2.5); opacity: 0; }
            100% { transform: scale(1); opacity: 0; }
        }
        
        .user-location-marker .pulse {
            stroke: #0078FF;
            stroke-width: 3;
            animation: pulse 2s infinite;
        }
        
        .bus-marker-icon {
            transition: transform 0.1s linear;
        }

        .info-panel {
            flex: 1;
            min-width: 280px;
            height: 500px;
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
        }

        #info-panel-content {
            overflow-y: auto;
        }
        
        .info-panel h3 {
            margin-top: 0;
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 1.5rem;
            font-family: var(--font-heading);
        }

        .bus-info {
            margin-bottom: 1rem;
            padding: 0.75rem;
            border-radius: 4px;
            border-left: 3px solid var(--border-color);
            transition: background-color 0.3s ease, border-left-color 0.3s ease;
            cursor: pointer;
        }
        .bus-info:hover, .bus-info.selected {
            background-color: #2a2f37;
            border-left-color: var(--primary-color);
        }
        
        .bus-info h4 {
            color: white;
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-family: var(--font-heading);
        }
        
        .bus-info h4 small {
            font-weight: normal;
            color: #aaa;
            font-size: 0.8rem;
        }

        .bus-info p {
            margin: 0.2rem 0;
            font-size: 0.9rem;
        }
        
        .leaflet-popup-content-wrapper, .leaflet-popup-tip {
            background: var(--card-bg);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
        .leaflet-popup-content h4 {
             color: var(--primary-color);
             font-family: var(--font-heading);
        }
         .leaflet-popup-content h4 small {
            color: #aaa;
         }

        /* --- End Simulation Styles --- */

        .hero {
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
        }

        .hero h1 {
            font-family: var(--font-heading);
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            margin-bottom: 1rem;
            color: white;
            text-shadow: 0 0 15px var(--primary-color);
            animation: text-glow 2s ease-in-out infinite alternate;
        }

        @keyframes text-glow {
            from {
                text-shadow: 0 0 10px var(--primary-color), 0 0 20px rgba(0, 255, 153, 0.7);
            }
            to {
                text-shadow: 0 0 20px var(--primary-color), 0 0 30px rgba(0, 195, 255, 0.7);
            }
        }


        .hero p {
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            color: var(--primary-color);
        }
        
        .section {
            padding: 5rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .section-title {
            font-family: var(--font-heading);
            text-align: center;
            font-size: clamp(2rem, 4vw, 2.5rem);
            color: white;
            margin-bottom: 3rem;
            text-shadow: 0 0 10px var(--secondary-color);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 2rem;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 255, 153, 0.2), 0 0 5px var(--primary-color) inset;
        }
        
        .card h3 {
            font-family: var(--font-heading);
            color: var(--primary-color);
            margin-top: 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .card .icon {
            color: var(--primary-color);
        }

        #architecture img, #architecture svg {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            display: block;
            border-radius: 8px;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            justify-items: center;
        }
        
        .team-member {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            width: 100%;
            max-width: 280px;
            transition: transform 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-5px);
        }
        
        .team-member img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid var(--primary-color);
            margin-bottom: 1rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }
        
        .team-member:hover img {
            filter: grayscale(0%);
        }

        .team-member h4 {
            font-family: var(--font-heading);
            color: white;
            margin: 0.5rem 0;
        }
        
        .team-member p {
            color: var(--secondary-color);
            font-size: 0.9rem;
        }

        footer {
            text-align: center;
            padding: 2rem 0;
            font-size: 0.9rem;
        }

        /* --- Custom Notification Toast --- */
        #notification-toast {
            position: fixed;
            bottom: -100px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--card-bg);
            color: #ff6347;
            padding: 1rem 2rem;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            z-index: 2000;
            transition: bottom 0.5s ease-in-out;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        #notification-toast.show {
            bottom: 20px;
        }

        /* --- Responsive Styles --- */
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                right: 0;
                height: calc(100vh - 70px);
                width: 60%;
                background-color: var(--bg-color);
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 3rem;
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
            }

            .nav-links.active {
                transform: translateX(0);
            }

            .hamburger {
                display: flex;
            }
            
            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }
            .hamburger.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            .hamburger.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    </style>
</head>
<body>
    <canvas id="matrix-bg"></canvas>
    <div id="notification-toast"></div>

    <!-- Auth Modal -->
    <div id="auth-modal">
        <div class="auth-box">
             <button class="close-modal-btn" id="close-auth-modal">&times;</button>
            <div id="auth-selection" class="auth-selection">
                <h1>Welcome to SmartTrack</h1>
                <p>Please select your login type.</p>
                <button id="show-user-login">User Login</button>
                <button id="show-admin-login">Admin Login</button>
            </div>

            <!-- User Login Form -->
            <div id="user-login-container" class="login-form-container">
                <h2 id="user-form-title">User Login</h2>
                <form id="user-login-form" class="login-form">
                    <input type="email" id="user-email" placeholder="Email" required>
                    <input type="password" id="user-password" placeholder="Password" required>
                    <button type="submit" id="user-submit-btn">Login</button>
                </form>
                <p class="form-toggle" id="user-toggle-mode">Don't have an account? Sign Up</p>
                <p class="form-back" data-target="auth-selection">← Back to selection</p>
            </div>

            <!-- Admin Login Form -->
            <div id="admin-login-container" class="login-form-container">
                <h2 id="admin-form-title">Admin Login</h2>
                <form id="admin-login-form" class="login-form">
                    <input type="email" id="admin-email" placeholder="Admin Email" required>
                    <input type="password" id="admin-password" placeholder="Admin Password" required>
                    <button type="submit" id="admin-submit-btn">Login</button>
                </form>
                 <p class="form-toggle" id="admin-toggle-mode">Don't have an account? Sign Up</p>
                <p class="form-back" data-target="auth-selection">← Back to selection</p>
            </div>
        </div>
    </div>
    
    <!-- Main App Container -->
    <div id="app-container">
        <header>
            <nav class="container">
                <a href="#" class="logo">&lt;Strikers GX /&gt;</a>
                <ul class="nav-links" id="nav-links">
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="#solution">Solution</a></li>
                    <li><a href="#simulation">Simulation</a></li>
                    <li><a href="#architecture">Architecture</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><button id="login-modal-btn">Login / Sign Up</button></li>
                    <li><button id="sign-out-btn" class="hidden">Sign Out</button></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>

        <main>
            <section class="hero">
                <div class="container">
                    <h1>Smart Public Transport Tracker</h1>
                    <p>Real-Time Tracking & Management for Emerging Cities // SIH 2025</p>
                </div>
            </section>

            <!-- Problem Section -->
            <section id="problem" class="section">
                <div class="container">
                    <h2 class="section-title">The Problem</h2>
                    <div class="grid">
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                Unpredictable Wait Times
                            </h3>
                            <p>Passengers in tier-2 and tier-3 cities face long, frustrating, and uncertain waits for public transport, disrupting their daily schedules.</p>
                        </div>
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                Overcrowding & Safety
                            </h3>
                            <p>Inefficient vehicle distribution leads to severe overcrowding, posing safety risks and creating an uncomfortable travel experience for commuters.</p>
                        </div>
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                                Fuel Wastage & Pollution
                            </h3>
                            <p>Non-optimized routes, traffic congestion, and excessive idling result in significant fuel waste and contribute to urban air pollution.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Solution Section -->
            <section id="solution" class="section">
                <div class="container">
                    <h2 class="section-title">Our Solution</h2>
                    <div class="grid">
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Low-Cost IoT Kit
                            </h3>
                            <p>A plug-and-play hardware module (ESP32, GPS, GSM) installed on buses to transmit live location data, designed to work reliably even in low-bandwidth areas.</p>
                        </div>
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Real-Time Passenger Counting
                            </h3>
                            <p>An innovative ESP32-CAM integration provides live passenger density data, allowing for proactive crowd management and better vehicle deployment.</p>
                        </div>
                        <div class="card">
                            <h3>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-3.4-4-6.2-4.3-.5-.1-1-.1-1.4.1l-1.9.4-4.2-4.2c-1-1-2.6-1-3.5 0l-.8.8c-1 1-1 2.6 0 3.5L8.4 15c.1.1.2.2.4.2l1.9-.4c.5-.1.9-.1 1.4-.1 2.8.3 5.6 1.9 6.2 4.3.3 1.4 0 2.7-.7 3.9l-1.8 2.5.8.8c1 1 2.6 1 3.5 0l4.2-4.2.8-.8c1-1 .9-2.6 0-3.5l-2.5-1.8z"></path><path d="m3.5 14.5.8.8c1 1 2.6 1 3.5 0l4.2-4.2.8-.8c1-1 .9-2.6 0-3.5l-2.5-1.8a2.5 2.5 0 0 0-3.5 0l-.8.8-4.2 4.2a2.5 2.5 0 0 0 0 3.5l1.8 2.5Z"></path></svg>
                                User & Admin Apps
                            </h3>
                            <p>A lightweight commuter app for real-time tracking and a powerful web dashboard for authorities to monitor the fleet and optimize routes with data-driven insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Simulation Section -->
            <section id="simulation" class="section">
                <div class="container">
                    <h2 class="section-title">Live Tracking Simulation (Kolkata)</h2>
                    <div class="simulation-container">
                        <div id="map-container">
                            <div id="map"></div>
                            <button id="locate-btn">Locate Me</button>
                        </div>
                        <div class="info-panel" id="infoPanel">
                        <h3>Fleet Status</h3>
                        <div id="info-panel-content">
                            <!-- Bus info will be dynamically inserted here -->
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Architecture Section -->
            <section id="architecture" class="section">
                <div class="container">
                    <h2 class="section-title">System Architecture</h2>
                    <svg width="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color: #161b22; border: 1px solid #30363d; font-family: 'Source Code Pro', monospace; border-radius: 8px;">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#00c3ff"/>
                            </marker>
                        </defs>
                        <text x="175" y="40" font-size="22" fill="#00ff99" text-anchor="middle">On-Bus IoT System</text>
                        <text x="600" y="40" font-size="22" fill="#00ff99" text-anchor="middle">Cloud Platform</text>
                        <text x="1025" y="40" font-size="22" fill="#00ff99" text-anchor="middle">End-User Applications</text>
                        <rect x="50" y="70" width="250" height="500" rx="8" stroke="#30363d" stroke-width="2" fill="#0d1117"/>
                        <rect x="70" y="90" width="210" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="175" y="120" font-size="16" fill="white" text-anchor="middle">ESP32 Microcontroller</text>
                        <text x="175" y="145" font-size="12" fill="#c9d1d9" text-anchor="middle">(Central Processor)</text>
                        <rect x="70" y="200" width="210" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="175" y="230" font-size="16" fill="white" text-anchor="middle">Neo-06 Module</text>
                        <text x="175" y="255" font-size="12" fill="#c9d1d9" text-anchor="middle">(Location Tracking)</text>
                        <rect x="70" y="310" width="210" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="175" y="340" font-size="16" fill="white" text-anchor="middle">GSM/GPRS Module</text>
                        <text x="175" y="365" font-size="12" fill="#c9d1d9" text-anchor="middle">(Data Transmission)</text>
                        <rect x="70" y="420" width="210" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="175" y="450" font-size="16" fill="white" text-anchor="middle">ESP32-CAM</text>
                        <text x="175" y="475" font-size="12" fill="#c9d1d9" text-anchor="middle">(Passenger Density)</text>
                        <text x="175" y="540" font-size="18" fill="white" text-anchor="middle">Bus Hardware Unit</text>
                        
                        <!-- Internal IoT Arrows -->
                        <line x1="175" y1="170" x2="175" y2="200" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <line x1="175" y1="280" x2="175" y2="310" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <line x1="175" y1="390" x2="175" y2="420" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>

                        <rect x="425" y="70" width="350" height="500" rx="8" stroke="#30363d" stroke-width="2" fill="#0d1117"/>
                        <rect x="450" y="90" width="300" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="600" y="120" font-size="16" fill="white" text-anchor="middle">MQTT Broker</text>
                        <text x="600" y="145" font-size="12" fill="#c9d1d9" text-anchor="middle">(Real-time Data Ingestion)</text>
                        <rect x="450" y="200" width="300" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="600" y="230" font-size="16" fill="white" text-anchor="middle">Backend Server (Node.js)</text>
                        <text x="600" y="255" font-size="12" fill="#c9d1d9" text-anchor="middle">(Data Processing & Logic)</text>
                        <rect x="450" y="310" width="300" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="600" y="340" font-size="16" fill="white" text-anchor="middle">API Layer (REST)</text>
                        <text x="600" y="365" font-size="12" fill="#c9d1d9" text-anchor="middle">(Secure Data Access)</text>
                        <rect x="450" y="420" width="300" height="80" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="600" y="450" font-size="16" fill="white" text-anchor="middle">Database (MongoDB)</text>
                        <text x="600" y="475" font-size="12" fill="#c9d1d9" text-anchor="middle">(Data Storage & Retrieval)</text>
                        
                        <!-- Internal Cloud Arrows -->
                        <line x1="600" y1="170" x2="600" y2="200" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <line x1="600" y1="280" x2="600" y2="310" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <line x1="600" y1="390" x2="600" y2="420" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        
                        <rect x="850" y="70" width="250" height="500" rx="8" stroke="#30363d" stroke-width="2" fill="#0d1117"/>
                        <rect x="875" y="90" width="200" height="120" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="975" y="130" font-size="16" fill="white" text-anchor="middle">Commuter App</text>
                        <text x="975" y="155" font-size="12" fill="#c9d1d9" text-anchor="middle">(React Native)</text>
                        <rect x="875" y="240" width="200" height="120" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="975" y="280" font-size="16" fill="white" text-anchor="middle">Admin Dashboard</text>
                        <text x="975" y="305" font-size="12" fill="#c9d1d9" text-anchor="middle">(Next.js)</text>
                        <rect x="875" y="390" width="200" height="120" rx="4" stroke="#30363d" fill="#161b22"/>
                        <text x="975" y="430" font-size="16" fill="white" text-anchor="middle">Driver App</text>
                        <text x="975" y="455" font-size="12" fill="#c9d1d9" text-anchor="middle">(Mobile)</text>
                        
                        <!-- Main Arrows -->
                        <line x1="300" y1="350" x2="425" y2="350" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <text x="362.5" y="335" font-size="12" fill="#00c3ff" text-anchor="middle">Encrypted Sensor Data (MQTT)</text>

                        <line x1="775" y1="300" x2="850" y2="300" stroke="#00c3ff" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <text x="812.5" y="285" font-size="12" fill="#00c3ff" text-anchor="middle">Secure Data (REST API)</text>
                    </svg>
                </div>
            </section>

            <!-- Team Section -->
            <section id="team" class="section">
                <div class="container">
                    <h2 class="section-title">The Team: Strikers GX</h2>
                    <div class="team-grid">
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=SP" alt="Shubham Panjiyara">
                            <h4>Shubham Panjiyara</h4>
                            <p>Team Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=RC" alt="Risav Chanda">
                            <h4>Risav Chanda</h4>
                            <p>Team Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=HK" alt="Hrishik Kundu">
                            <h4>Hrishik Kundu</h4>
                            <p>Team Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=SS" alt="Suraj Shaw">
                            <h4>Suraj Shaw</h4>
                            <p>Team Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=AD" alt="Arpan Debnath">
                            <h4>Arpan Debnath</h4>
                            <p>Team Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/00ff99/0d1117?text=SG" alt="Srijata Goswami">
                            <h4>Srijata Goswami</h4>
                            <p>Team Member</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="container">
                <p>&copy; 2025 Strikers GX. Built for the Smart India Hackathon.</p>
            </div>
        </footer>
    </div>
    
    <!-- LeafletJS Map Library -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
    
    <script type="module">
        // Firebase SDK imports
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { 
            getAuth, 
            onAuthStateChanged, 
            signInWithEmailAndPassword, 
            createUserWithEmailAndPassword, 
            signOut
        } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

        // --- Firebase Initialization ---
        const localFirebaseConfig = {
            apiKey: "AIzaSyDvKO9ZNvaQMemY9VgoZNQ5ydda91T1eLs",
            authDomain: "sihtransport.firebaseapp.com",
            projectId: "sihtransport",
            storageBucket: "sihtransport.appspot.com",
            messagingSenderId: "920187949799",
            appId: "1:920187949799:web:1c784f05836e042f154842"
        };

        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : localFirebaseConfig;
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // --- DOM Elements ---
        const authModal = document.getElementById('auth-modal');
        const loginModalBtn = document.getElementById('login-modal-btn');
        const signOutBtn = document.getElementById('sign-out-btn');
        const closeAuthModalBtn = document.getElementById('close-auth-modal');
        
        const userLoginContainer = document.getElementById('user-login-container');
        const adminLoginContainer = document.getElementById('admin-login-container');
        const authSelection = document.getElementById('auth-selection');

        // --- Auth State Logic ---
        onAuthStateChanged(auth, user => {
            if (user) { // User is properly signed in
                loginModalBtn.classList.add('hidden');
                signOutBtn.classList.remove('hidden');
                authModal.classList.remove('show');
            } else { // User is signed out
                loginModalBtn.classList.remove('hidden');
                signOutBtn.classList.add('hidden');
            }
        });

        // --- UI Switching Logic for Auth Modal ---
        function showForm(formToShow) {
            authSelection.classList.add('hidden');
            userLoginContainer.classList.remove('active');
            adminLoginContainer.classList.remove('active');
            formToShow.classList.add('active');
        }

        document.getElementById('show-user-login').addEventListener('click', () => showForm(userLoginContainer));
        document.getElementById('show-admin-login').addEventListener('click', () => showForm(adminLoginContainer));

        document.querySelectorAll('.form-back').forEach(btn => {
            btn.addEventListener('click', () => {
                authSelection.classList.remove('hidden');
                userLoginContainer.classList.remove('active');
                adminLoginContainer.classList.remove('active');
            });
        });

        function setupForm(formId, titleElId, toggleElId, submitBtnId) {
            const form = document.getElementById(formId);
            const title = document.getElementById(titleElId);
            const toggle = document.getElementById(toggleElId);
            const submitBtn = document.getElementById(submitBtnId);
            let isLogin = true;

            toggle.addEventListener('click', () => {
                isLogin = !isLogin;
                title.textContent = isLogin ? title.textContent.replace('Sign Up', 'Login') : title.textContent.replace('Login', 'Sign Up');
                submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
                toggle.textContent = isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login";
            });

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                const password = form.querySelector('input[type="password"]').value;
                
                try {
                    if (isLogin) {
                        await signInWithEmailAndPassword(auth, email, password);
                    } else {
                        await createUserWithEmailAndPassword(auth, email, password);
                    }
                    // onAuthStateChanged will handle UI changes
                } catch (error) {
                    showNotification(error.message);
                }
            });
        }

        setupForm('user-login-form', 'user-form-title', 'user-toggle-mode', 'user-submit-btn');
        setupForm('admin-login-form', 'admin-form-title', 'admin-toggle-mode', 'admin-submit-btn');
        
        // --- Modal Controls ---
        loginModalBtn.addEventListener('click', () => {
             authModal.classList.add('show');
        });
        
        closeAuthModalBtn.addEventListener('click', () => {
            authModal.classList.remove('show');
        });

        // --- Sign Out ---
        signOutBtn.addEventListener('click', async () => {
            await signOut(auth);
            showNotification("You have been signed out.");
        });

        // --- Main App Logic (runs on page load) ---
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('#app-container .nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        function drawMatrix() {
            ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff99'; 
            ctx.font = fontSize + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 33);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        const infoPanelContent = document.getElementById('info-panel-content');
        const locateBtn = document.getElementById('locate-btn');
        let userMarker = null;
        let busMarkers = {};

        const csvData = `busId,operator,routeNumber,routeName,busType,capacity,status,latitude,longitude,timestamp,speed,lastStartTime,routesPerDay,fareType
WB-98-8360,Salt Lake Express,S30,Park Circus ↔ Barasat,Double-Decker,70,Running,22.555418,88.272488,2025-09-04T13:07:06,24.7,2025-09-10T02:43:59,6,AC
WB-56-3057,Kolkata Tramways,S12,Esplanade ↔ Garia,Non-AC,60,Running,22.671507,88.40027,2025-09-04T19:33:53,56.5,2025-09-06T07:20:25,4,AC
WB-89-3939,Jadavpur Bus Co.,AC20,Howrah ↔ Sector V,Double-Decker,70,Running,22.630455,88.314511,2025-09-06T04:34:45,41.6,2025-09-16T16:26:25,8,AC
WB-50-9281,Salt Lake Express,DN16,Dumdum ↔ Newtown,AC,50,Off-road,22.545367,88.493215,2025-09-11T03:07:29,0,2025-09-17T09:42:07,5,Special
WB-37-3788,Jadavpur Bus Co.,S18,Ultadanga ↔ Jadavpur,AC,50,Running,22.585121,88.491295,2025-09-05T01:54:19,25.4,2025-09-17T03:57:44,7,AC
WB-55-4654,Howrah Urban Bus Services,S12,Esplanade ↔ Garia,Mini,40,Running,22.569438,88.484213,2025-09-08T18:18:23,33.1,2025-09-15T10:48:38,5,Normal
WB-18-9333,Howrah Urban Bus Services,AC20,Howrah ↔ Sector V,Non-AC,60,Running,22.6917,88.44814,2025-09-13T10:24:47,18.5,2025-09-18T01:26:29,6,Special
WB-71-7776,Howrah Urban Bus Services,AC20,Howrah ↔ Sector V,Low-Floor,80,Running,22.684959,88.257644,2025-09-13T10:24:47,18.5,2025-09-18T01:26:29,6,Special
WB-77-2369,Jadavpur Bus Co.,S18,Ultadanga ↔ Jadavpur,Mini,50,Running,22.685195,88.385973,2025-09-15T07:21:25,52.6,2025-09-07T17:39:23,4,AC
WB-27-3669,South Bengal STC,AC20,Howrah ↔ Sector V,AC,50,Running,22.634165,88.43292,2025-09-03T11:16:14,15.2,2025-09-05T15:45:10,3,Special
WB-55-9631,South Bengal STC,S30,Park Circus ↔ Barasat,Double-Decker,60,Off-road,22.516746,88.434339,2025-09-05T01:54:19,0,2025-09-17T03:57:44,7,AC`;

        const busData = csvData.trim().split('\n').slice(1).map(row => {
            const [busId, operator, routeNumber, routeName, busType, capacity, status, latitude, longitude, timestamp, speed] = row.split(',');
            return { id: busId, operator, routeNumber, routeName, busType, capacity: parseInt(capacity), status, lat: parseFloat(latitude), lng: parseFloat(longitude), speed: parseFloat(speed) };
        });

        const avgLat = busData.reduce((acc, bus) => acc + bus.lat, 0) / busData.length;
        const avgLng = busData.reduce((acc, bus) => acc + bus.lng, 0) / busData.length;
        
        const map = L.map('map').setView([avgLat, avgLng], 12);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(map);

        function createElements() {
            infoPanelContent.innerHTML = ''; // Clear previous content
            busData.forEach(bus => {
                const busStatusColor = bus.status === 'Running' ? 'var(--primary-color)' : '#ff6347';
                const busIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${busStatusColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`;
                const busIcon = L.divIcon({ className: 'bus-marker-icon', html: busIconSVG, iconSize: [24, 24] });
                const marker = L.marker([bus.lat, bus.lng], { icon: busIcon }).addTo(map);
                const popupContent = `<h4>${bus.id} <small>(${bus.operator})</small></h4><p><strong>Route:</strong> ${bus.routeName} (${bus.routeNumber})</p><p><strong>Status:</strong> ${bus.status}</p><p><strong>Speed:</strong> ${bus.speed} km/h</p>`;
                marker.bindPopup(popupContent);
                busMarkers[bus.id] = marker;

                const busInfoElement = document.createElement('div');
                busInfoElement.className = 'bus-info';
                busInfoElement.dataset.busId = bus.id;
                busInfoElement.innerHTML = `<h4>${bus.id} <small>(${bus.routeNumber})</small></h4><p>${bus.routeName}</p><p>Status: <span style="color: ${busStatusColor}">${bus.status}</span></p>`;
                busInfoElement.addEventListener('click', () => {
                    document.querySelectorAll('.bus-info').forEach(el => el.classList.remove('selected'));
                    busInfoElement.classList.add('selected');
                    const targetBus = busMarkers[bus.id];
                    if (targetBus) {
                        map.flyTo(targetBus.getLatLng(), 15);
                        targetBus.openPopup();
                    }
                });
                infoPanelContent.appendChild(busInfoElement);
            });
        }
        
        locateBtn.addEventListener('click', () => {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                map.flyTo([latitude, longitude], 15);
                const userIcon = L.divIcon({ className: 'user-location-marker', html: `<svg viewBox="0 0 24 24" fill="#0078FF" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7" stroke="#FFFFFF" stroke-width="2"/><circle class="pulse" cx="12" cy="12" r="8" fill="none"/></svg>`, iconSize: [24, 24] });
                
                const popupContent = `<b>You are here!</b><br>Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`;

                if (userMarker) {
                    userMarker.setLatLng([latitude, longitude]).setPopupContent(popupContent);
                } else {
                    userMarker = L.marker([latitude, longitude], { icon: userIcon }).addTo(map);
                    userMarker.bindPopup(popupContent);
                }
                userMarker.openPopup();
                showNotification("Location found!");
            }, () => {
                showNotification('Could not get your location. Please enable permissions.');
            });
        });
        
        createElements();
        
        // --- Generic Utility ---
        const notificationToast = document.getElementById('notification-toast');
        function showNotification(message) {
            notificationToast.textContent = message;
            notificationToast.classList.add('show');
            setTimeout(() => {
                notificationToast.classList.remove('show');
            }, 3000);
        }
    </script>
</body>
</html>

