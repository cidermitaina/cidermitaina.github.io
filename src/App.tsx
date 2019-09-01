import React from 'react';
import Section from './components/Section';
import BackBg from './components/BackBg';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <div className="App">
      <Section />
      <BackBg />
      <Footer />
    </div>
  );
}

export default App;
