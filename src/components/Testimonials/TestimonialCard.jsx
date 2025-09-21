const TestimonialCard = ({ name, rating, image, text }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="star">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="profile">
        <img src={image} alt={`Profile of ${name}`} />
        <div className="profile-name">{name}</div>
      </div>
      <div className="rating">
        {renderStars()}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;