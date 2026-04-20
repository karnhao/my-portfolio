import './ResearchShowcase.css';
const SortingVisualizer = () => (
    <main className="fade-in">
        <section>
            <h2>Sorting Algorithm Visualizer</h2>
            <p>
                A javafx application that visualizes various sorting algorithms in action. Users can select different algorithms and see how they sort a list of numbers in real-time.
            </p>

            <div className="research-content">
                <div className="research-text">
                    <h4>Technologies Used</h4>
                    <ul>
                        <li>JavaFX for GUI</li>
                        <li>Java Collections Framework</li>
                        <li>Git for version control</li>
                        <li>JUnit for testing</li>
                    </ul>

                    <h4>Features</h4>
                    <ul>
                        <li>Visualizes sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort</li>
                        <li>Interactive controls to adjust speed and input size</li>
                        <li>Real-time updates of the sorting process</li>
                    </ul>
                </div>
                <div className="research-image">
                    <img
                        src={process.env.PUBLIC_URL + "/images/quick-sort-snapshot.png"}
                        alt="Snapshot of sorting visualizer"
                        className="project-image"
                    />
                </div>

            </div>


        </section>
    </main>
);

export default SortingVisualizer;
