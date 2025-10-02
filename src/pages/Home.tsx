import React from 'react';
import Header from '@/components/Header';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header
        title="Welcome to Your Frontend Journal"
        subtitle="Document your React learning journey"
      />
      <main className="home-content">
        <section className="intro">
          <h2>Start Your Learning Journey</h2>
          <p>
            This is your space to document React concepts, experiments, and best
            practices. Use this journal to track your progress and build a
            knowledge base for future reference.
          </p>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>📝 Document Learning</h3>
            <p>Keep track of new concepts and techniques you discover</p>
          </div>

          <div className="feature-card">
            <h3>🧪 Experiment</h3>
            <p>Try out new React features and patterns</p>
          </div>

          <div className="feature-card">
            <h3>🚀 Best Practices</h3>
            <p>Collect and organize proven development practices</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
