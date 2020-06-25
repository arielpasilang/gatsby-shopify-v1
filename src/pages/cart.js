import React from 'react'
import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import BreadCrumbs from '~/components/BreadCrumbs'

const CartPage = () => (
	<>
		<Container>
			<BreadCrumbs menu="cart" />
			<Cart />
		</Container>
	</>
)

export default CartPage
