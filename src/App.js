import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { MealDetails } from './components/MealDetails';



function App() {
   return <>
      <Router basename='/ReactRecepts'>
         <Header />
         <main className='container content'>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/category/:name" element={<Category />} />
               <Route path="/meal/:id" element={<MealDetails/>} />
            </Routes>
         </main>
         <Footer />
      </Router>
   </>
}

export default App;

