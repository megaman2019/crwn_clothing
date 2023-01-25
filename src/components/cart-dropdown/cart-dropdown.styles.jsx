import styled from "styled-components"

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles"

export const CartDropdownContainerDiv = styled.div`
  position: absolute;
  width: 280px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessageSpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
