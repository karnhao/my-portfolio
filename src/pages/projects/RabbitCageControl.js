import React from 'react';

const RabbitCageControl = () => (
    <main className="fade-in">
        <section>
            <h2>🐇 Rabbit Cage Control & Management</h2>
            <p>
                An automation system designed as part of an Internet of Things course. This project allows remote interaction and monitoring of a rabbit enclosure using voice commands and Discord integrations.
            </p>

            <div>
                <div>
                    <h4>🚀 Technologies Used</h4>
                    <ul>
                        <li>ESP32 Microcontroller</li>
                        <li>Node.js Backend</li>
                        <li>Arduino IDE</li>
                        <li>Git</li>
                        <li>Discord Webhook API</li>
                    </ul>

                    <h4>🧠 Features</h4>
                    <ul>
                        <li>Voice assistant integration (e.g., Siri) to remotely release food</li>
                        <li>Real-time temperature monitoring of the cage environment</li>
                        <li>Feeding activity and sensor updates posted to a private Discord channel</li>
                    </ul>
                </div>
                <div>
                    <div style={{width: "300px", overflow: "auto", alignContent: "left"}}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/esp32-setup.jpg"}
                            alt="ESP32 setup with wiring"
                            className="project-image"
                            width="100%"
                        />
                    </div>
                </div>
            </div>






            <p>
                This project combines low-level hardware programming with web-based control logic, all wrapped in a playful yet practical real-world use case. 🐾
            </p>
        </section>
    </main>
);

export default RabbitCageControl;
