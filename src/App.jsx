import { BrowserRouter,Route,Routes} from 'react-router-dom';

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import Egirls from "./pages/Egirls";
import Collabs from './pages/Collabs';

function App() {

  return (
    <BrowserRouter basename="/">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collabs" element={<Collabs />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/egirls" element={<Egirls />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
