import React from 'react'; 
import Navbar from './components/Navbar/navbar'; 
import Hero from './components/Hero/Hero';
import Statistics from './components/statistics/Statistics';
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className=''>
      <Navbar />  
      <Hero />
      <div style={{ marginTop: '80px' }}></div>
      <Statistics />
      <WhyChooseUs/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}

export default App;
