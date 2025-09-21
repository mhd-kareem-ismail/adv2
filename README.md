# Little Learners Academy - React Project

A modern React application built with Vite for Little Learners Academy kindergarten school website.

## Project Structure

```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Benefits/
│   │   ├── Benefits.jsx
│   │   └── BenefitCard.jsx
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── TestimonialCard.jsx
│   ├── FAQ/
│   │   ├── FAQ.jsx
│   │   └── FAQItem.jsx
│   ├── Navigate/
│   │   ├── Navigate.jsx
│   │   └── NavigateCard.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   └── UI/
│       ├── Card.jsx
│       └── Button.jsx
├── data/
│   └── index.js
├── App.jsx
├── App.css
└── index.css
```

## Features

- **Dynamic Components**: All data is managed through props and centralized in `data/index.js`
- **Reusable Components**: Modular card components for benefits, testimonials, navigation, and FAQ
- **Interactive FAQ**: Accordion functionality with expand/collapse
- **Responsive Design**: Mobile-friendly layout
- **Component Organization**: Each section has its own folder with related components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Component Usage

### Adding New Benefits
Edit `src/data/index.js` and add to the `benefits` array:
```javascript
{
  id: 7,
  icon: '🎨',
  title: 'Creative Arts',
  description: 'Fostering creativity through various art forms.'
}
```

### Adding New Testimonials
Edit `src/data/index.js` and add to the `testimonials` array:
```javascript
{
  id: 4,
  name: 'Sarah M',
  rating: 5,
  image: 'path/to/image.jpg',
  text: 'Amazing experience for my child!'
}
```

### Adding New FAQ Items
Edit `src/data/index.js` and add to the `faqs` array:
```javascript
{
  id: 8,
  question: 'What is your refund policy?',
  answer: 'We offer flexible refund options...',
  isExpanded: false
}
```

## Technologies Used

- React 18
- Vite
- CSS3
- JavaScript ES6+