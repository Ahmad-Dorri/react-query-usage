import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ReactQueryApp from './ReactQueryApp.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryApp />
    </QueryClientProvider>
  </React.StrictMode>
);
