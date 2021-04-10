import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const Footer = props => {
    return (
        <>
            <div className="container">
                <p className="text-center text-white py-5">{props.hola}</p>
            </div>
        </>
    )
}
Footer.propTypes={
    hola: PropTypes.string
}