import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Listado from './components/listado';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Listado/>
      <Footer/>
    </div>
  );
}

export default App;
