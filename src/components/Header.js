import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="content-container">
                <div className="header-items">
                    <NavLink className="header-title" to="/">YWK</NavLink>
                    <div>
                        <NavLink className="header-item" to="help">Help</NavLink>
                        <NavLink className="header-item" to="create">Create</NavLink>
                        <NavLink className="header-item" to="edit">Edit</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;