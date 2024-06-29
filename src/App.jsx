import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import MoreInfo from './components/MoreInfo';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Presentation />
        <Projects />
        <MoreInfo />
      </main>
      <Contact />
    </div>
  );
}

export default App;
