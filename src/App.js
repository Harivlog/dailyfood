
import './App.css';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
function App() {
  return (
    <div>
     <Navbar />
     <Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Intro/>
     <Chef/>
     <Laurels/>
     <Gallery/>
     <FindUs/>
     <Footer/>
   
    </div>
  );
}

export default App;
