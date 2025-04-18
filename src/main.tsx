
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Make sure we're not trying to access any null elements
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error('Root element not found');
}
