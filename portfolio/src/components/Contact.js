import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class Contact extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                            <div className="d-flex flex-row justify-content-end my-4 mr-4">
                                <NavLink className="mr-4" to="https://www.linkedin.com/in/accurtis">LinkedIn</NavLink>
                                <NavLink className="mr-4" to="https://github.com/accurtis18/">Github</NavLink>
                            </div>
                        </div>
                    </div>
            </div >
        )
    }
}

export default Contact;