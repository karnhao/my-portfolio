import React from 'react';
import './ResearchShowcase.css';
const ResearchShowcase = () => (
    <main className="fade-in">
        <section className="research-section">
            <h2>Object Detection Robustness Cooperative Research</h2>
            <p>
                This study represents the first cooperative education program between Kasetsart University 
                (Thailand) and Yeungnam University (South Korea). Conducted while studying at Yeungnam University, 
                it highlights the value of international collaboration in advancing applied AI research.
            </p>
            <p>
                This research explores the robustness of object detection models under varying conditions. 
                It evaluates performance across different datasets, noise levels, and adversarial scenarios, 
                aiming to improve reliability in real-world applications.
            </p>

            <div className="research-content">
                <div className="research-text">
                    <h4>Methodology</h4>
                    <ul>
                        <li>Dataset preparation and augmentation</li>
                        <li>Model training and evaluation</li>
                        <li>Robustness testing under adversarial inputs</li>
                        <li>Statistical analysis following APA research standards</li>
                    </ul>

                    <h4>Key Findings</h4>
                    <ul>
                        <li>Performance degradation varies significantly with noise intensity</li>
                        <li>Adversarial perturbations expose model vulnerabilities</li>
                        <li>Standard evaluation metrics may not capture robustness fully</li>
                        <li>Recommendations for improved testing protocols</li>
                    </ul>
                </div>

                <div className="research-image">
                    
                    <img
                        src={process.env.PUBLIC_URL + "/images/object-detection-comparation.png"}
                        alt="Object Detection Comparation"
                        className="project-image"
                    />
                    <img
                        src={process.env.PUBLIC_URL + "/images/model-layered-view.png"}
                        alt="Object Detection Comparation"
                        className="project-image"
                    />
                </div>
            </div>

            <p>
                This project bridges academic rigor with practical engineering needs, 
                providing insights into how object detection systems can be stress-tested 
                and improved for deployment in safety-critical environments.
            </p>
        </section>
    </main>
);

export default ResearchShowcase;
