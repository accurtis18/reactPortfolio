import React from 'react';
import { NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active text-light" to="/">Home</NavLink>
                            <NavLink className="nav-item nav-link active text-light" to="/Portfolio">Portfolio</NavLink>
                            <NavLink className="nav-item nav-link active text-light" to="/Contact">Contact</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        )
    }
}
export default Header;