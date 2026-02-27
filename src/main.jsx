import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from 'react-router-dom';

library.add(faChevronDown, faBars);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
