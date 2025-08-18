import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Keep your existing styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
