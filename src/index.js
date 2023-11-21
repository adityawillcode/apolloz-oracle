import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginUserProvider from './Context/LoginUserContext';
import QuizContextProvider from './Context/QuizContext';
import AdminContextProvider from './Context/AdminContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<LoginUserProvider>
<AdminContextProvider>
  <QuizContextProvider>
<App />
  </QuizContextProvider>
  </AdminContextProvider>
</LoginUserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
