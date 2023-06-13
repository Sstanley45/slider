import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slider from './Slider';
import LoremIpsumComponent from './LoremIpsumComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     <Slider /> 
    // <LoremIpsumComponent/>
  </React.StrictMode>
);

