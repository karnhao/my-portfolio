import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const projects = [
  
  {
    title: "Rabbit Cage Control",
    description: "IoT automation system for monitoring and feeding rabbits remotely with Discord integration.",
    image: process.env.PUBLIC_URL + "/images/esp32-setup.jpg",
    url: "/projects/cooperativeresearch"
  },
  {
    title: "Object Detection Robustness",
    description: "Research project on robustness of object detection models under noise and adversarial conditions.",
    image: process.env.PUBLIC_URL + "/images/object-detection-comparation.png",
    url: "/projects/cooperativeresearch"
  },
  {
    title: "Real-Time Risk Area Detection and Navigation System Using Geospatial Prediction",
    description: "Coming soon",
    image: process.env.PUBLIC_URL + "/images/placeholder.png",
    url: null
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Coming soon",
    image: process.env.PUBLIC_URL + "/images/placeholder.png",
    url: null
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing projects, research, and collaborative works.",
    image: process.env.PUBLIC_URL + "/images/placeholder.png",
    url: null
  },
  {
    title: "There are still many more!",
    description: "Coming soon when I have time",
    image: process.env.PUBLIC_URL + "/images/placeholder.png",
    url: null
  },
];

const Home = () => (
  <main className="fade-in">
    <section className="intro">
      <h2>Welcome!</h2>
      <p>Hi, I’m Sittipat, a Computer Science student from Thailand who loves helping people!</p>
      <p>Explore my projects, learn more about me, and feel free to say hi!</p>
    </section>

    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <Link
            key={index}
            to={proj.url}
            className="project-card"
          >
            <img src={proj.image} alt={proj.title} className="home-project-image" />
            <div className="project-info">
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default Home;
