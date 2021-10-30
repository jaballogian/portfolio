import React, { createContext, useState } from 'react'

// MATERIAL UI CORES
import useMediaQuery from '@mui/material/useMediaQuery'

const AllPagesContext = createContext()

const AllPagesContextProvider = (props) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.only('xs'))
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.only('sm'))
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.only('md'))
  const isLgScreen = useMediaQuery((theme) => theme.breakpoints.only('lg'))
  const isXlScreen = useMediaQuery((theme) => theme.breakpoints.only('xl'))

  // TYPE = OBJECT
  const [ toast, setToast ] = useState(null)

  const changeToast = (inputValue) => {
    setToast(inputValue)
  }

  let breakpointType
  isXsScreen && (breakpointType = 'xs')
  isSmScreen && (breakpointType = 'sm')
  isMdScreen && (breakpointType = 'md')
  isLgScreen && (breakpointType = 'lg')
  isXlScreen && (breakpointType = 'xl')

  return (
    <AllPagesContext.Provider
      value={{
        toast, changeToast,
        breakpointType,
      }}
    >
      {props['children']}
    </AllPagesContext.Provider>
  )
}

export { AllPagesContextProvider, AllPagesContext }