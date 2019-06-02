import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";


const App = () =>
    <div className="ui container">
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
    </div>;

export default App;
