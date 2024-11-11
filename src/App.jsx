import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ backgroundColor: "#FFFAF1" }}>
      <Navbar />
      <Home/>
      <Menu />
      <AboutUs />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
