import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'ErrorBoundary';
import App from './components/App';
import './index.css';
import { store } from './redux/store';
import { persistor } from './redux/store';
import GlobalStyles from '../src/styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/MoneyGuard">
            <ErrorBoundary>
              <GlobalStyles />
              <App />
            </ErrorBoundary>
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
