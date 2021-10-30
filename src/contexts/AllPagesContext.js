import React, { createContext, useState } from 'react'

const AllPagesContext = createContext()

const AllPagesContextProvider = (props) => {
  // TYPE = OBJECT
  const [ toast, setToast ] = useState(null)

  const changeToast = (inputValue) => {
    setToast(inputValue)
  }

  return (
    <AllPagesContext.Provider
      value={{
        toast, changeToast,
      }}
    >
      {props['children']}
    </AllPagesContext.Provider>
  )
}

export { AllPagesContextProvider, AllPagesContext }