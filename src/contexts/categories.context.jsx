import { createContext, useState, useEffect } from "react"

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js"

// import SHOP_DATA from "../shop-data.js"

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  // ONLY ENABLE WHEN POPULATING RECORDS THE FIRST TIME
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA)
  // }, [])
  const [categoriesMap, setCategoriesMap] = useState([])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const response = await getCategoriesAndDocuments()
      setCategoriesMap(response)
      console.log(response)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
