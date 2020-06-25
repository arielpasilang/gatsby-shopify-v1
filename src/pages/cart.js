import React from 'react'
import styled from '@emotion/styled'
import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

const CartPage = () => (
	<Container>
		<Title>Cart</Title>
		<Cart />
	</Container>
)

export default CartPage

const Title = styled.h1`
	font-size: 18px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
`
