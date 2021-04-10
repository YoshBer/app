import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

export const NavBar = props => {
    return (
        <>
            <div className="container py-2">
            <nav className="navbar navbar-expand-lg gradient">
  <div className="container-fluid">
    <div>
        <a className="navbar-brand text-white" href="#">D/C Tester</a>
    </div>
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark"><NavLink activeClassName="text-light" exact to="/app">Voltage</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark"><NavLink activeClassName="text-light" exact to="/resistencia">Resistencia</NavLink></a>
        </li>
        <li className="nav-item">
         <a className="nav-link text-dark"><NavLink activeClassName="text-light" exact to="/intensidad">Intensidad</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark"><NavLink activeClassName="text-light" exact to="/potencia">Potencia</NavLink></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        </>
    )
}
NavBar.propTypes = {
    hola: PropTypes.string
}