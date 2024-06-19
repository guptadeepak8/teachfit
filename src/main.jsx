import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Candidate from './pages/Candidate.jsx';
import JobForm from './pages/JobForm.jsx';
import OrgForm from './pages/OrgForm.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './pages/Employee.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/jobform" element={<JobForm />} />
          <Route path="/orgform" element={<OrgForm />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
