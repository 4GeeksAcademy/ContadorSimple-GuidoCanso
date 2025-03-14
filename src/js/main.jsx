import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import Counter from './components/Counter/Counter';

let counter = 0;

const renderCounter = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Counter seconds={counter} />
  );
  counter++;
};

setInterval(renderCounter, 1000);