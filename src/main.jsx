import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
