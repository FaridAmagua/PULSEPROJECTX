import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FloatingFooter from './components/FloatingFooter';
import Egirls from "./pages/Egirls";
import Collabs from './pages/Collabs';
import Service from './pages/Service';
import Scrolltotop from './components/Scrolltotop';
import { I18nextProvider } from 'react-i18next';
import i18n from './configuration/i18n'; // Asegúrate de que esta ruta sea correcta

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/">
        <Scrolltotop />
        <Navbar />
        <FloatingFooter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/egirls" element={<Egirls />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
