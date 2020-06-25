import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  console.log('LineItems', checkout.lineItems)

  return (
    <div>
      {lineItems}
      <TotalArea>
        <Flex>
          <Title>Sub Total:</Title>
          <Value>Php {checkout.subtotalPrice}</Value>
        </Flex>
        <Flex>
          <Title>Taxes:</Title>
          <Value>{checkout.totalTax}</Value>
        </Flex>

        <Total>TOTAL:</Total>
        <TotalValue>Php {checkout.totalPrice}</TotalValue>
      </TotalArea>

      <Button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        <Checkout>Check out</Checkout>
      </Button>
    </div>
  )
}

export default Cart

const TotalArea = styled.div`
  text-align: center;
  padding-top: 30px;
`
const Flex = styled.div`
  display: inline-flex;
  text-align: center;
  margin: 10px 0;
  width: 100%;
`
const Title = styled.span`
  font-size: 16px;
  width: 50%;
  text-align: right;
  margin-right: 10px;
  color: #000;
`

const Value = styled.span`
  font-size: 16px;
  width: 50%;
  text-align: left;
  color: #979797;
`

const Total = styled.h3`
  font-weight: bold;
`
const TotalValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #0099ff;
`

export const Button = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 65px;
  margin: 0 auto;
  width: 100%;
`

const Checkout = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  height: 40px;
  display: block;
  margin: 10px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #0099ff;
  border-radius: 20px;
  color: #0099ff;
  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #0099ff;
  }
`
