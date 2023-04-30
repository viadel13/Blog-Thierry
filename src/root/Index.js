import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Index';
import Contact from '../components/Contact/Index';

const Root = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/contact' element={<Contact />}  />
        </Routes>
    </Router>
  )
}

export default Root
