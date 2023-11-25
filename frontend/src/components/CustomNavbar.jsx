import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLogedIn } from '../auth';

const CustomNavbar = () => {
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)



  useEffect(() => {
    setLogin(isLogedIn())
    setUser(getCurrentUserDetail())
  }, [login])

  const logOut = () => {
    doLogout(() => {
      setLogin(false)
      navigate("/")
    })
  }

  return (
    <div>
      <Navbar
        color='dark'
        dark
        expand='md'
      >
        <NavbarBrand tag={ReactLink} to="/">Blog Fair</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contactus" >Contact Us</NavLink>
            </NavItem>


          </Nav>
          <Nav>
            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}

            {
              login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/user/userdashboard">
                      {user.email}
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink onClick={logOut} href='#' >
                      Logout
                    </NavLink>
                  </NavItem>
                </>
              )
            }

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default CustomNavbar;