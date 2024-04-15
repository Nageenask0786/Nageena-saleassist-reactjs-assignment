import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./index.css";

class Header extends Component {
  state = {
    showMenuItems: false,
  };

  showAndHideMenuItems = () => {
    this.setState((prevState) => ({
      showMenuItems: !prevState.showMenuItems,
    }));
  };

  render() {
    const { showMenuItems } = this.state;

    return (
      <>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            <img
              src="https://res.cloudinary.com/dchxbofyt/image/upload/v1708078256/website-logo_lcbbvf.png"
              alt="website logo"
              className="website-logo"
            />
          </Link>

          <ul className="nav-items-large-container">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Bags
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jewellery" className="nav-link">
                Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/electronics" className="nav-link">
                Electronics
              </Link>
            </li>
          </ul>

          <button
            className="menu-button"
            type="button"
            onClick={this.showAndHideMenuItems}
          >
            <FiMenu size={20} />
          </button>
        </nav>

        {showMenuItems && (
          <ul className="nav-items-small">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Bags
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jewellery" className="nav-link">
                Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/electronics" className="nav-link">
                Electronics
              </Link>
            </li>
          </ul>
        )}
      </>
    );
  }
}

export default Header;
