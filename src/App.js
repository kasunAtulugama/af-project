import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import AdminSignupForm from "./components/forms/AdminSignupForm";
import Instructors from "./components/Instructor";
import AddInstructer from "./components/forms/InstructorAddingForm";


const App = () =>
    <div className="ui container">
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin_sign_up" exact component={AdminSignupForm}/>
        <Route path="/instructor" exact component={Instructors}/>
        <Route path="/instructor/add-instructor" exact component={AddInstructer}/>
    </div>;

export default App;
