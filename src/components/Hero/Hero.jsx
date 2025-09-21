import { heroStats } from "../../data";
import './Hero.css';

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="hero-image-container">
        <img
          src="/assets/imgs/Image Container.png"
          alt="Two young children playing on a seesaw."
        />
      </div>
      <div className="hero-content">
        <p className="welcome-text">Welcome to Little Learners Academy</p>
        <h1 className="main-heading">
          Where Young Minds Blossom and <span>Dreams Take Flight.</span>
        </h1>
        <p className="description-text">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="stats-container">
          {heroStats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
