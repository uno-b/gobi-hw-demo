import { BrowserRouter as Router } from 'react-router-dom';

import Hero from './sections/Hero';
import Winter from './sections/Winter';
import Showcase from './sections/Showcase';
import GetAndGift from './sections/GetAndGift';
import About from './sections/About';
import Subscribe from './sections/Subscribe';
import Footer from './components/Footer';

import './normalize.css';
import './App.css';

function App() {
  return (
    <Router>
      <Hero />
      <Winter />
      <Showcase />
      <Showcase />
      <GetAndGift />
      <About />
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
