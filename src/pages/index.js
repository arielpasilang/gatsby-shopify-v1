import React from 'react'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import { Container } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const IndexPage = () => (
	<Container>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<ProductGrid />
		<Navigation />
	</Container>
)

export default IndexPage
