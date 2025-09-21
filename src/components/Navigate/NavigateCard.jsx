const NavigateCard = ({ title, description, href }) => {
  return (
    <div className="navigate-card">
      <div className="card-line"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href} className="learn-more-btn">Learn More →</a>
    </div>
  );
};

export default NavigateCard;