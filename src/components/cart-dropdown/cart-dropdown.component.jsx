import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { CartContext } from "../../contexts/cart.context"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import {
  CartDropdownContainerDiv,
  CartItemsDiv,
  EmptyMessageSpan,
} from "./cart-dropdown.styles.jsx"

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const navigateToCheckout = () => {
    setIsCartOpen(!isCartOpen)
    navigate("/checkout")
  }

  return (
    <CartDropdownContainerDiv>
      <CartItemsDiv>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessageSpan>Your cart is empty.</EmptyMessageSpan>
        )}
      </CartItemsDiv>
      <Button buttonType="inverted" onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainerDiv>
  )
}

export default CartDropdown
