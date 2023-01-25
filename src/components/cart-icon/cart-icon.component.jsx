import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import {
  CartIconContainerDiv,
  ItemCountSpan,
  ShoppingIcon,
} from "./cart-icon.styles"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainerDiv onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCountSpan>{cartCount}</ItemCountSpan>
    </CartIconContainerDiv>
  )
}

export default CartIcon
