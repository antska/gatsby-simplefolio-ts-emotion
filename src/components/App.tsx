import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/core';

import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import { PortfolioProvider } from 'context/context';
import { heroData, aboutData, projectsData, contactData, footerData } from 'mock/data';
import globalStyles from 'styles/global';
import { typeStyles } from 'styles/typography';

const App: React.FC = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([{}]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Global styles={[globalStyles, typeStyles]} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
