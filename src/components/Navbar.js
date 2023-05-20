import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
      <h2 >  <a className='text-center navbar-brand' href="/">{props.title}</a> </h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
    
    </>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired,
                  }

Navbar.defaultProps = {
   title : "Business Name goes here!",
}