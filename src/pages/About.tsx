import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About This Journal</h1>
      </header>

      <main className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            The Reactive Frontend Journal is designed to be a comprehensive
            resource for documenting the ever-evolving landscape of frontend
            development, with a special focus on React and modern JavaScript.
          </p>
        </section>

        <section className="goals">
          <h2>Goals</h2>
          <ul>
            <li>Document real-world problem solving approaches</li>
            <li>Track performance optimization techniques</li>
            <li>Explore cutting-edge React ecosystem trends</li>
            <li>Build a personal knowledge base for interview prep</li>
            <li>Share insights from daily development work</li>
          </ul>
        </section>

        <section className="tech-stack">
          <h2>Tech Stack</h2>
          <p>Built with modern tools and best practices:</p>
          <ul>
            <li>React 19 with TypeScript</li>
            <li>Vite for fast development</li>
            <li>ESLint + Prettier for code quality</li>
            <li>Modern CSS with responsive design</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
