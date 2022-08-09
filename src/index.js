import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import LoginPage from './pages/LoginPage';

import { Provider } from 'react-redux';
import store from './store/store';
import EditEmployee from './pages/EditEmployee';
import EmployeeDetails from './pages/EmployeeDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/list" element={<EmployeeList/>}/>
            <Route path="/create" element={<CreateEmployee/>}/>
            <Route path="/edit/:id" element={<EditEmployee/>}/>
            <Route path="/details/:id" element={<EmployeeDetails/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
