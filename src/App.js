import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Contect } from './pages/Contect';
import { Home } from './pages/Home'
import { Plan } from './pages/Plan';
import { Recommendations } from './pages/Recommendations';
import { Session } from './pages/Session';
import { Technology } from './pages/Technology';
import { Trending } from './pages/Treding';
import { Footer } from './components/Footer';
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Trending/>
      <Technology/>
      <Plan/>
      <Recommendations/>
      <Session/>
      <About/>
      <Contect/>
      <Footer/>
    </div>
  );
}

export default App;
