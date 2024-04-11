import './App.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import ContactPage from './components/ContactPage';
import SkillsPage from './components/SkillsPage';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [selectedPage, setSelectedPage] = useState(null)

  return (
    <>
      <Header pageTitle="{DIYAKO}" updateFunction={setSelectedPage} />
        { 
        !selectedPage ? <FrontPage /> : 
        selectedPage === "skills" ? <SkillsPage /> :
        selectedPage === "projects" ? <FrontPage /> :
        <ContactPage />
        }
      <Footer />
    </>
  );
}

export default App;
