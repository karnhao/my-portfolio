import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  haoKUWidget: {
    title: 'HaoKUWidget',
    description: 'An iOS widget to help Kasetsart University students check their class schedules and subject info quickly.',
    technologies: ['Swift', 'WidgetKit', 'KU API'],
  },
  haoVSort: {
    title: 'HaoVSort',
    description: 'A Bukkit plugin that visualizes sorting algorithms in Minecraft using color-coded blocks and sound.',
    technologies: ['Java', 'Spigot API'],
  },
  haoSj: {
    title: 'HaoSj',
    description: 'A lightweight TypeScript library for managing subject metadata and utilities.',
    technologies: ['TypeScript', 'NPM'],
  },
  haoDiscordBot: {
    title: 'HaoDiscordBot',
    description: 'A bot for Discord that shares course info with commands or auto-posts updates.',
    technologies: ['Node.js', 'Discord.js'],
  },
  melt: {
    title: 'Melt',
    description: 'A work-in-progress visual novel game where I contribute to the development team.',
    technologies: ['Ren\'Py', 'Story scripting'],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <main className="fade-in">
        <section>
          <h2>Project not found</h2>
          <p>Sorry, I couldn't find anything with that ID!</p>
        </section>
      </main>
    );
  }

  return (
    <main className="fade-in">
      <section>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h4>Technologies:</h4>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProjectDetail;
