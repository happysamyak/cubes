import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";

import CubeBook from "./../modules/Cubes/CubeBook";
import MealBook from "../modules/meals/mealsBook"
import { LinkContainer } from "react-router-bootstrap";
class NavBar extends Component {
    
  constructor(props) {
    super(props)
    let a = 5;
  }

  
  render() {
  
    return (
        <div>
            <Router>
            <Navbar fluid collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>CubeBook</NavItem>
            </LinkContainer>
            <LinkContainer to="/MealBook">
              <NavItem>MeelBook</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Cube Book </Link></li>
            <li><Link to={'/Meel'} className="nav-link">Meel</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
    </nav>*/}
          <hr />
          <Switch>
              <Route exact path='/' component={CubeBook} />
              <Route path='/MealBook' component={MealBook} />
               {/* <Route path='/about' component={About} />  */}
          </Switch>
        
      </Router>
      </div>
    );
  }
  
}
export default NavBar;