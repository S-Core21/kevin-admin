import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isSignedIn, children}) => {

    console.log(isSignedIn, 'data')
    if(isSignedIn){
        return <Navigate to='/dashboard'  />
    }

  return children
}

export default Protected