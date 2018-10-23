import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow } from '@progress/kendo-react-layout';

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
      <React.Fragment>
        {/* <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
          <TabStripTab title="Paris">
            <div class="weather">
              <h4>17<span>&ordm;C</span></h4>
              <p>Rainy weather in Paris.</p>
            </div>
          </TabStripTab>
          <TabStripTab title="New York">
            <div class="weather">
              <h4>29<span>&ordm;C</span></h4>
              <p>Sunny weather in New York.</p>
            </div>
          </TabStripTab>
          <TabStripTab title="London">
            <div class="weather">
              <h4>21<span>&ordm;C</span></h4>
              <p>Sunny weather in London.</p>
            </div>
          </TabStripTab>
          <TabStripTab title="Moscow">
            <div class="weather">
              <h4>16<span>&ordm;C</span></h4>
              <p>Cloudy weather in Moscow.</p>
            </div>
          </TabStripTab>
        </TabStrip> */}


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            ActionBeans Logo
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
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
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
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
      </React.Fragment>
    );
  }
}

export default NavBar;
