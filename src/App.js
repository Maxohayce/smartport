import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Mission from './Mission/Mission';
import Teamup from './Teamup/Teamup';
import Steechit from './Steechit/Steechit';
import Muse from './Muse/Muse';
import Instructor from './Instructor/Instructor';
import Cuckoo from './Cuckoo/Cuckoo';
import Projects from './Epact/Epact';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <About />
        <Mission />
        <Teamup />
        <Steechit />
        <Muse />
        <Instructor />
        <Cuckoo />
        <Projects />
      </div>
    </div>
  );
}

export default App;
