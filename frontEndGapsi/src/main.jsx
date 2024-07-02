import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import { Welcome } from './pages/Welcome.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './router/AppRouter.jsx';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
//import { App } from './App.jsx';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>

)
