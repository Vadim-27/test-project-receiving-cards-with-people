import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'App';
import { store } from 'redux/store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="test-project-receiving-cards-with-people">
        {/* <div className='container'> */}
        <App />
        {/* </div> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
