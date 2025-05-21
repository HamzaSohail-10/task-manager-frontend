import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './pages/TaskDashboard.jsx';
import CreateTask from './pages/CreateTask';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Router>
          <Header />
          <ToastContainer position="top-right" autoClose={3000} />

          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<TaskDashboard />} />
              <Route path="/create" element={<CreateTask />} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
