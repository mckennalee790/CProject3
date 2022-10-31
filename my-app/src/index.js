import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Goals from './pages/Goals';
//import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

