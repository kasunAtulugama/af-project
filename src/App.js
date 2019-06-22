import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import AdminSignupForm from "./components/forms/AdminSignupForm";
import  StudentDashForm from "./components/forms/StudentDashForm";
import UploadAssignmentAnswerForm from "./components/forms/UploadAssignmentAnswerForm";


const App = () =>
    <div className="ui container">
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin_sign_up" exact component={AdminSignupForm}/>
        <Route path="/studentDash" exact component={StudentDashForm}/>
        <Route path="/uploadAssignmentAnswer" exact component={UploadAssignmentAnswerForm}/>
    </div>;

export default App;
