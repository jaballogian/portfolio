import React, { createContext, useState } from 'react'

const PageNumberContext = createContext()

const PageNumberContextProvider = (props) => {
  const [ currentPage, setCurrentPage ] = useState(0)

  const changeCurrentPage = (inputNumber) => {
    setCurrentPage(inputNumber)
  }

  return (
    <PageNumberContext.Provider
      value={{
        currentPage,
        changeCurrentPage,
      }}
    >
      {props['children']}
    </PageNumberContext.Provider>
  )
}

export { PageNumberContextProvider, PageNumberContext }
