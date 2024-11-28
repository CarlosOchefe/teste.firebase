import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NewsletterForm from './components/Newsletter/NewsletterForm';
import NewsletterList from './components/Newsletter/NewsletterList';
import Navbar from './components/Layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<NewsletterList />} />
            <Route path="/create" element={<NewsletterForm />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;