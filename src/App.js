import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/> 
    </div>
  );
}

export default App;
