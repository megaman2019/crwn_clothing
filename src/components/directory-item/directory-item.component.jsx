import { useNavigate } from "react-router-dom"

import {
  BackgroundImageDiv,
  BodyDiv,
  DirectoryItemContainerDiv,
} from "./directory-item.styles"

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainerDiv onClick={onNavigateHandler}>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <BodyDiv>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyDiv>
    </DirectoryItemContainerDiv>
  )
}

export default DirectoryItem
