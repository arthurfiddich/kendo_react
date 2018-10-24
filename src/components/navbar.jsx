import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    }
  }
  handleSelect = (e) => {
    this.setState({ selected: e.selected });
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark customNavBar">
          <div>
            <img src="https://i.kym-cdn.com/photos/images/original/001/167/182/13e.jpg" alt="Logo" />
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="nav navbar-nav">
              <NavLink className="nav-item nav-link" to="/tickets">
                Tickets
            </NavLink>
              <NavLink className="nav-item nav-link" to="/team">
                Team
            </NavLink>
              <NavLink className="nav-item nav-link" to="/inventory">
                Inventory
            </NavLink>
              <NavLink className="nav-item nav-link" to="/accounts">
                Accounts
            </NavLink>
              <NavLink className="nav-item nav-link" to="/customers">
                Customers
            </NavLink>
              <NavLink className="nav-item nav-link" to="/installations">
                Installations
            </NavLink>
              <NavLink className="nav-item nav-link" to="/analysis">
                Analysis
            </NavLink>
              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
              {!user && (
                <NavLink className="nav-item nav-link" to="login">
                  Login
                </NavLink>
              )}
              {user && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/profile">
                    {user.name}
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/logout">
                    Logout
                </NavLink>
                </React.Fragment>
              )}
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
