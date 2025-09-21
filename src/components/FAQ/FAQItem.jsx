const FAQItem = ({ id, question, answer, isExpanded, onToggle }) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="faq-question" onClick={handleToggle}>
        <span>{question}</span>
        <span className="toggle-icon">{isExpanded ? '-' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;