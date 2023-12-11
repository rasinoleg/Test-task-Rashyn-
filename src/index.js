import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './styles/globalStyles';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={store}>
      <BrowserRouter basename="/rasinoleg/Test-task-Rashyn-public">
      <GlobalStyle />
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);




