import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { navigation } from "../src/components/Db/data.js";

import './index.css'


createRoot(document.getElementById('root')).render(
    <App navigation={navigation} />
)
