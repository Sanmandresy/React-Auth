import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>} />
                <Route index element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
