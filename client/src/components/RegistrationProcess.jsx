import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const RegistrationProcess = () => {

  const location = useLocation();
  const [isShown, setIsShown] = useState(false);

  const checkIsShown = () => {
    if (location.pathname.match("/registration/observer") || location.pathname.match("/registration/competitor")) {
        setIsShown(true)
    } else {
        setIsShown(false)
    }
  }

  useEffect(() => {
    checkIsShown()
    console.log(isShown)
  }, [])

  return (
    <div className={`${isShown ? "block" : "hidden"}`}>RegistrationProcess</div>
  )
}

export default RegistrationProcess