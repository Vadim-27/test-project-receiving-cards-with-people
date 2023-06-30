import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="test-project-receiving-cards-with-people">
      {/* <div className='container'> */}
        <App />
      {/* </div> */}
    </BrowserRouter>
  </React.StrictMode>
);
