import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>  {icon} {title} </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title:'Github Finder',
    icon: <FaGithub/>
  }


  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}

export default Navbar
