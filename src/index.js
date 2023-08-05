import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home/App';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import ErrorPage from './pages/Error/App';
import CadastroCategoria from './pages/cadastro/Categoria';

const rootElement = document.getElementById("app");

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);