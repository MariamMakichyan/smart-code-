import App from './App.jsx'

import { createRoot } from 'react-dom/client'
import { navigation } from "../src/components/Db/data.js";
import { socialLinks } from '../src/components/Db/data.js';

import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css'


createRoot(document.getElementById('root')).render(
    <App navigation={navigation} socialLinks={socialLinks} />
)
