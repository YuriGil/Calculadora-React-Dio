//importação de arquivos externos funcionalidades
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//importação de estilo global
import GlobalStyles from './global';
//criação de base para incersão de conteudo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);
