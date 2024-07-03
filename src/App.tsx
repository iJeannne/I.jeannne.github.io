import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import XKCDComic from './components/Comic';
import ComicP from './components/Comic';
const App: React.FC = () => {
    return (
        <div id="page">
            <Header />
            <Menu />
            <Router>
            <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/comic" element={<ComicP />} />
                </Routes></Router>
            <Footer />
        </div>
    );
};

export default App;
