const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;