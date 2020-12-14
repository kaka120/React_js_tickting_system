import React, { useState } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
 

function Header( {props} ) {
    
    const state = {
        isOpen: false
      };

    const [count, setCount] = useState(state);
    
    const toggleCollapse = () => {
       // this.setCount({ isOpen: !this.state.isOpen });
       alert();
      }
    console.log(count)
      
    return (
        <React.Fragment>
            {/* <h1>Header</h1>
              <ul>
                <li><Link to={`${props.url}/homepage`}>HomePage</Link></li>
                <li><Link to={`${props.url}/createrequest`}>CreateRequest</Link></li>
            </ul> */}
             
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Tickting Tool</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              {/* <Link to={`${props.url}/homepage`}>HomePage</Link> */}
              <MDBNavLink to={`${props.url}/homepage`}>Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={`${props.url}/createrequest`}>CreateRequest</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
           
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>


            
        </React.Fragment>
    )
}

export default Header
