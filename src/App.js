import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from './Components/Intro/Intro'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context'
import { useContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="App"
     style={{
      backgroundColor: darkMode? 'black': '',
      color: darkMode? 'white': ''
     }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
