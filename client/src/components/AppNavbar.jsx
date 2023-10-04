import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
                <NavbarBrand href='/'>Fill Your Basket</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav  style={{marginLeft: 'auto'}} navbar >
                        <NavItem >
                            <NavLink href='githubaccount'>GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    </div>
  )
}

export default AppNavbar