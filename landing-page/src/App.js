import './styles/App.css';
import Heading from './component/Heading';
import Navbar from './component/Navbar.js';
import Cards from './component/Cards';
import Footer from './component/Footer';



function App() {
  return <div className='container'>
    <Navbar/>
    <Heading/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Footer/>
    
  </div>;

    
    

}

export default App;
