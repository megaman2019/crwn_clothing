import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
// import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { selectCurrentUser } from "../../store/user/user.selector"

import { signOutUser } from "../../utils/firebase/firebase.utils"

import {
  NavContainerDiv,
  NavLink,
  NavLinksDiv,
  LogoContainerLink,
} from "./navigation.styles"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

  // const signOutHandler = async () => {
  //   await signOutUser()
  //     .then(setCurrentUser())
  //     .catch((error) => console.log(`Signout encountered a problem: ${error}`))
  // }

  return (
    <Fragment>
      <NavContainerDiv>
        <LogoContainerLink to="/">
          <CrwnLogo />
        </LogoContainerLink>

        <NavLinksDiv>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksDiv>
        {isCartOpen && <CartDropdown />}
      </NavContainerDiv>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
