import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import AdminSignupForm from "./components/forms/AdminSignupForm";


const App = () =>
    <div className="ui container">
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin_sign_up" exact component={AdminSignupForm}/>
    </div>;

export default App;
