import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import Parent from './parent'; // Correctly import the Parent component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Use the Parent component with an uppercase P */}
  </React.StrictMode>
);

reportWebVitals(); 
 

 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




