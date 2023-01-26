import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import "./category.styles.scss"

const Category = () => {
  const [products, setProducts] = useState([])

  const { categoriesMap } = useContext(CategoriesContext)

  const { category } = useParams()

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Category
