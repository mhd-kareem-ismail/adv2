import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Navigate from './components/Navigate/Navigate';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Navigate />
      <Footer />
    </div>
  );
}

export default App;