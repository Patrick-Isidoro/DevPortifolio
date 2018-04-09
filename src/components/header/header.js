import React from 'react'
import {Navlink} from 'react-router-dom'

//Importando components necessários da lib react-materialize
import { Navbar, NavItem, Row } from 'react-materialize'

const Header = () => ( 
    <Row >
        <Navbar className = 'grey darken-2' >
            <li><Navlink href = '/' > Home </Navlink></li>  
            <li><Navlink href = '/contact' > Contact </Navlink></li>
        </Navbar > 
    </Row>
)

export default Header