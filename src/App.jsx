import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Articles from './pages/articles';
import Home from './pages/home';
import Contact from './pages/contact';
import Layout from './Layout';
import SignUpPage from './components/signup';
import SignInPage from './components/signin';

function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
    afterSignOutUrl="/"
    signInUrl="/signin"
    signUpUrl="/signup" >
      <div className="min-h-screen bg-gray-50">
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/articles" element={<Articles/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ClerkProvider>
  );
}

export default App;