import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>  {icon} {title} </h1>
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
