// Imports nativos da Biblioteca 
import React from 'react'
import ReactDOM from 'react-dom'

// Importando o componenet APP
import App from './App'

//Importando o css
import './index.css'

// Renderizando o component APP (com seus sub components) em <div id="root"></div> do index.html
ReactDOM.render( < App / > , document.getElementById('root'))