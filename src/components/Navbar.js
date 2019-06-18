import React from 'react'
import logo from '../sliit.png';
import { homeCarousel } from './HomeCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <div className="container-fluid mt-4 mb-5">
            <div className="row">
                <div className="col-6">
                    <a className="navbar-brand ml-5" href="#"><img src={logo} style={{ width:'35px' }}/> </a>
                </div>
                {/*input username field*/}
                <div className="input-group col-3 mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon= {faUser}/></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>
                {/*input password feild*/}
                <div className="input-group col-3 mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon= {faKey}/></span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password"/>
                    <button className="btn btn-warning ml-2"><FontAwesomeIcon style={{ width: '20px'}} icon={faChevronCircleRight}/></button>
                </div>

            </div>
            <div className="mt-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/login">Login</Link>
                        </li>
                        {/*create admin sign up nav*/}
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/admin_sign_up">Sign up</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white text-uppercase ml-5 dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-white text-uppercase" href="#">Action</a>
                                <a className="dropdown-item text-white text-uppercase" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-white text-uppercase" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase ml-lg-5 disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Course..." aria-label="Search"/>
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><FontAwesomeIcon style={{ width: '20px'}} icon={faSearch}/></button>
                    </form>
                </div>
                </nav>
                <homeCarousel/>
            </div>
        </div>
    )
}

export default Navbar;