import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import { TwoColumnGrid, breakpoints } from '~/utils/styles'

const IndexPage = () => (
	<Column>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		<LeftArea>
			<ul>
				Categories List
				<li>One</li>
				<li>Two</li>
			</ul>
		</LeftArea>
		<RightArea>
			<h1>All Products</h1>
			<ProductGrid />
		</RightArea>
		{/*<Link to="/page-2/">Go to page 2</Link>*/}
	</Column>
)

export default IndexPage

export const Column = styled.div`
	display: inline-flex;
	@media (max-width: ${breakpoints.s}px) {
		display: block;
	}
`

export const LeftArea = styled.div`
	width: 30%;
	@media (max-width: ${breakpoints.s}px) {
		display: block;
		width: 100%;
	}
`
export const RightArea = styled.div`
	width: 70%;
	@media (max-width: ${breakpoints.s}px) {
		display: block;
		width: 100%;
	}
`
