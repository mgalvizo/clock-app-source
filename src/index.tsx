import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClockContextProvider } from './context/clockContext';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element!);

root.render(
    <ClockContextProvider>
        <App />
    </ClockContextProvider>
);
