import React from 'react';
import { useParams } from 'react-router-dom';
import RabbitCageControl from './projects/RabbitCageControl';
import Test1 from './projects/Test1';

const ProjectDetail = () => {
  const { projectId } = useParams();

  switch (projectId) {
    case "rabbitCageControl":
      return <RabbitCageControl />;
    case "test1":
      return <Test1 />;
    default:
      break;
  }

  return (
    <main className="fade-in">
      <section>
        <h2>Project {projectId} not found</h2>
        <p>Sorry, I couldn't find anything with that ID!</p>
      </section>
    </main>
  );
};

export default ProjectDetail;
