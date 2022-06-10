
import './App.css';
import {
  
  Routes,
  Route,
} from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
function App() {
  return (
    <div>
     <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="menu" element={<SpecialMenu />} />
      <Route path="intro" element={<Intro />} />
      
      <Route path="chef" element={<Chef />} />
      <Route path="laurels" element={<Laurels />} />
        
      <Route path="gallery" element={<Gallery />} />
      <Route path="findus" element={<FindUs />} />
      {/* <Route path="footer" element={<Footer />} /> */}
       
    </Routes>
    </div>
  );
}

export default App;
