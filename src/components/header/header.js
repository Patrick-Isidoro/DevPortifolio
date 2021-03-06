import React from 'react'
import { NavLink } from 'react-router-dom'

//Importando components necessários da lib react-materialize
import { Navbar, NavItem, Row } from 'react-materialize'

const Header = () => ( 
    <Row >
        <Navbar className ='grey darken-2'>
            <li><NavLink to = '/' > Home </NavLink></li>  
            <li><NavLink to = '/contact' > Contact </NavLink></li>
        </Navbar > 
    </Row>
)

export default Header