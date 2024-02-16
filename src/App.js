import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
