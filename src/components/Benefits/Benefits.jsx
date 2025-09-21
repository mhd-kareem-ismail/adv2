import { useState, useEffect } from 'react';
import { benefits } from '../../data';
import BenefitCard from './BenefitCard';
import './Benefits.css';

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth <= 768 ? 1 : 3);
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);
  
  const maxIndex = Math.max(0, benefits.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div className="benefits-tag">Children Deserve Bright Future</div>
        <h2>Our Benefits</h2>
        <p>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>

      <div className="benefits-slider">
        <button 
          className="slider-btn prev-btn" 
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ‹
        </button>
        
        <div className="benefits-grid">
          {benefits.slice(currentIndex, currentIndex + cardsPerView).map(benefit => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <button 
          className="slider-btn next-btn" 
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Benefits;