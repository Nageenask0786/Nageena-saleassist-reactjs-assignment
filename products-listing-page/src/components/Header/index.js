import { Component } from 'react';
import {Link} from 'react-router-dom'

import { FiMenu } from "react-icons/fi";

import './index.css'

class Header extends Component {
    state = {showMenuItems : false}

    showAndHideMenuItems = () => {
        this.setState((prevState)=>({
            showMenuItems : !prevState.showMenuItems
        }))
    }
    render() {
        const {showMenuItems} = this.state
        return (
            <>
            <nav className = "nav-bar">
            <Link to = "/" className= "nav-link">
                    <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1708078256/website-logo_lcbbvf.png"
                alt = "website logo"
                className = "website-logo" />
               </Link>
    
                <ul className = "nav-items-large-container">
                <Link to = "/" className= "nav-link">
                <li>Bags</li>
                </Link>
                <Link to = "/jewellery" className= "nav-link">
                <li>Jewellery</li>
                </Link>
                <Link to = "/men" className= "nav-link">
                <li>Men</li>
                </Link>
                <Link to = "/women" className= "nav-link">
                <li>Women</li>
                </Link>
                <Link to = "/electronics" className= "nav-link">
                <li>Electronics</li>
                </Link>
                </ul>
                <button className = "menu-button" type='button' onClick={this.showAndHideMenuItems}><FiMenu size={20}/></button>
            </nav>
            {showMenuItems &&
            <ul className = "nav-items-small">
            <Link to = "/" className= "nav-link">
                <li>Bags</li>
                </Link>
                <Link to = "/jewellery" className= "nav-link">
                <li>Jewellery</li>
                </Link>
                <Link to = "/men" className= "nav-link">
                <li>Men</li>
                </Link>
                <Link to = "/women" className= "nav-link">
                <li>Women</li>
                </Link>
                <Link to = "/electronics" className= "nav-link">
                <li>Electronics</li>
                </Link>
            </ul>
            }
        </>
        )
    }
}



export default Header