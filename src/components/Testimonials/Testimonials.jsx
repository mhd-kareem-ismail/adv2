import { useState, useEffect } from 'react';
import { testimonials } from '../../data';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
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
  
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="testimonials-tag">Their Happy Words 💬</div>
        <h2>Our Testimonials</h2>
        <p>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>

      <div className="testimonials-carousel">
        <div 
          className={`carousel-arrow left-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={prevSlide}
        >
          ←
        </div>
        
        <div className="testimonials-grid">
          {testimonials.slice(currentIndex, currentIndex + cardsPerView).map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
        
        <div 
          className={`carousel-arrow right-arrow ${currentIndex === maxIndex ? 'disabled' : ''}`}
          onClick={nextSlide}
        >
          →
        </div>
      </div>
    </section>
  );
};

export default Testimonials;