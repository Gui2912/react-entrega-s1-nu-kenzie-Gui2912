import React from 'react'
import '../../Styles/globalStyles.css'
import '../../Styles/containers.css'

const ContainerBackGround = ({children, classes}) => {
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default ContainerBackGround