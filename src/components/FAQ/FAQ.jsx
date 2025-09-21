import { useState } from 'react';
import { faqs } from '../../data';
import FAQItem from './FAQItem';
import './FAQ.css';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="faq-tag">Solutions For The Doubts</div>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.
        </p>
      </div>
      <div className="faq-grid">
        {faqs.map(faq => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isExpanded={expandedId === faq.id}
            onToggle={toggleFAQ}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;