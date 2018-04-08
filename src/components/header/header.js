import React from 'react'

//Importando components necessários da lib react-materialize
import { Navbar, NavItem, Row } from 'react-materialize'

const Header = () => ( <
    Row >
    <
    Navbar className = 'grey darken-2' >
    <
    NavItem href = '/' > Home < /NavItem>  <
    NavItem href = '/contact' > Contact < /NavItem>  < /
    Navbar > <
    /Row>
)

export default Header