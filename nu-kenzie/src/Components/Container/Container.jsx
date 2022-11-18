import React from 'react'

const Container = (props) => {

  const {children, classes} = props

  return (
      <div className={classes}>
        {children}
      </div>  
  )
}

export default Container