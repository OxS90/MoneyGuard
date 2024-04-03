import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/MoneyGuard">
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
