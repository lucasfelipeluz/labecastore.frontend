import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

/**
 * Componente responsável pelas rotas do App. Irá chamar as pages da pasta `src/pages`
 * @returns {JSX.Element}
 */
export default function AppRoutes(): JSX.Element {
  console.log('ok');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<>/projetos</>} />
        <Route path="admin" element={<>Bem vindo ADMIN</>} />
      </Routes>
    </Router>
  );
}
