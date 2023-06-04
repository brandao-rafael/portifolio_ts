import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-container container" id="about">
      <div className="about-header">
        <h3>
          <span>Rafael Brandão</span>
        </h3>
        <h2>Fullstack Web Developer</h2>
      </div>
      <div className="about-content">
        <div>
          <p>
            Born in Borda da Mata, Minas Gerais, Brazil, in 1992, I stand out as
            a highly engaged Full-Stack developer, whose passion for technology,
            science, astronomy, games, sports and motorsport fuels my creativity
            and innovation in several areas.
          </p>
          <p>
            My technical skills are robust, covering HTML, CSS, JavaScript,
            ReactJS, ContextAPI, Hooks, Redux, Tests, NodeJS, Object Oriented
            Programming (OOP), SOLID principles, TypeScript, Python, algorithm
            complexity, data structures, MySQL and MongoDB. My commitment to
            constant evolution drives me to seek new challenges and expand my
            knowledge, as demonstrated by the Flutter course I am currently
            completing, further expanding the versatility of my portfolio.
          </p>
        </div>
        <div>
          <p>
            I am a highly motivated professional, with a strong sense of
            responsibility and a great ability to work in teams. I am also
            passionate about learning new technologies and applying them to
            projects, as well as sharing my knowledge with others.
          </p>
          <p>
            My unwavering commitment to quality ensures my ability to handle any
            project, bringing efficient solutions and excellent results. If you
            are looking for a Full-Stack developer who is always willing to
            learn, I invite you to explore my profile on Github and learn more
            about my trajectory and skills. Regardless of whether you are
            starting a website from scratch or looking for assistance on an
            existing project, I am prepared to offer appropriate solutions and
            exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
