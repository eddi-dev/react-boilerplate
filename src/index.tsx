import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './pages/App';
import reportWebVitals from './pages/reportWebVitals';

const getRoot = () => {
    const container = document.getElementById('root')
    if (container != null) {
        return container
    }
    const rootDiv = document.createElement('div')
    rootDiv.id = 'root'
    document.appendChild(rootDiv)
    return rootDiv
}

const container = getRoot()
const root = createRoot(container)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
