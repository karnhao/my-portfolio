import React from 'react';
import './ResearchShowcase.css';
const RiskAreaDetection = () => (
    <main className="fade-in">
        <section className="research-section">
            <h2>Real-Time Risk Area Detection and Navigation System</h2>
            <p>
                This project delivers a <b>web-based application</b> designed to enhance public safety by integrating geospatial prediction with real-time navigation.
                Unlike conventional map services that prioritize speed or convenience, this system emphasizes safety awareness by identifying and alerting users to hazardous areas such as accident-prone zones, construction sites, or flood-affected roads.
            </p>
            <p>
                The system was developed over 11 agile sprints, progressively integrating navigation algorithms, IoT connectivity, volunteer participation, and database management. It applies spherical trigonometry (Haversine formula) and parametric equations for geospatial calculations, ensuring accuracy in route planning and risk detection.
            </p>
            <div className="research-content">
                <div className="research-text">
                    <h4>Technologies Used</h4>
                    <ul>
                        <li>Frontend: React (TypeScript), Leaflet.js for interactive maps</li>
                        <li>Backend: Node.js, Express, RESTful APIs</li>
                        <li>Database: MySQL for structured risk area and user-role management</li>
                        <li>IoT Hardware: ESP32 microcontroller, GNSS GPS module for live positional tracking</li>
                        <li>Algorithms: Haversine formula for distance calculation, parametric equations for geospatial risk detection</li>
                        <li>Architecture: Role-based access (Admin, User, Volunteer), modular backend services, scalable API design</li>
                        <li>Networking: Multicast Domain Name System (mDNS) for IoT discovery</li>
                    </ul>
                    <h4>Related Theory</h4>
                    <ul>
                        <li>Spherical trigonometry ensures accurate distance and area calculations on Earth’s surface.</li>
                        <li>Safe route planning applies shortest-path logic with hazard avoidance, similar to Dijkstra’s algorithm but extended with risk-weighted edges.</li>
                        <li>Real-time data streams from GPS modules demonstrate cyber-physical system principles.</li>
                    </ul>
                    <h4>Key Features Include</h4>
                    <ul>
                        <li>Interactive Map Interface built with React and Leaflet, showing risk zones.</li>
                        <li>Real-Time Alerts that notify users when approaching or entering dangerous areas.</li>
                        <li>Safe Route Navigation that calculates alternative paths to secure destinations.</li>
                        <li>Community Participation where volunteers can report and validate risk areas, supported by an admin verification system.</li>
                        <li>IoT Integration using ESP32 and GNSS GPS modules to provide live positional data and enhance responsiveness.</li>
                        <li>Robust Backend powered by Node.js, Express, and MySQL, ensuring scalable data management and secure user roles</li>
                    </ul>
                </div>

                <div className="research-image">
                    <img
                        src={process.env.PUBLIC_URL + "/images/risk-map-example.png"}
                        alt="Example Dangerious Zone Navigation to nearest exit"
                        className="project-image"
                    />
                </div>
            </div>

        </section>
    </main>
);

export default RiskAreaDetection;
