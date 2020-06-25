import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  ProductData,
  Title,
  Actions,
  Button,
  Count,
  Quantity,
  Minus,
  Plus,
} from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      width="100px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <ProductData>
        <Title>{item.title.toUpperCase()}</Title>
        <p>Description</p>
        <span>Price</span>
      </ProductData>
      <Actions>
        <Count>
          <Minus>-</Minus>
          <Quantity type="text" value={item.quantity} />
          <Plus>+</Plus>
        </Count>
        <Button onClick={handleRemove}>REMOVE</Button>
      </Actions>
    </Wrapper>
  )
}

export default LineItem
