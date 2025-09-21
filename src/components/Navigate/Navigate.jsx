import { navigationCards } from '../../data';
import NavigateCard from './NavigateCard';
import './Navigate.css';

const Navigate = () => {
  return (
    <section className="navigate-section">
      <div className="navigate-header">
        <div className="navigate-tag">Explore More</div>
        <h2>Navigate through our Pages</h2>
        <p>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school. Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten
          school.
        </p>
      </div>
      <div className="navigate-grid">
        {navigationCards.map(card => (
          <NavigateCard
            key={card.id}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Navigate;