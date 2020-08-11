import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
export class Navbar extends Component {
    static defaultProps = {
        title:'Github Finder',
        icon: <FaGithub/>
      }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>  {this.props.icon} {this.props.title} </h1>
            </nav>
        )
    }
}

export default Navbar
