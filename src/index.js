import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/authContext'
import { BrowserRouter, useLocation, withRouter } from 'react-router-dom'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

