import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ Active, children, onClick }) => {
  if (Active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => { 
      e.preventDefault()
      onClick()
    }}>
      {children}
    </a>
  )
}

Link.propTypes = {
  Active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
