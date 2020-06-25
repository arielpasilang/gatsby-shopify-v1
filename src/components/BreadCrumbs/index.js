import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Breadcrumbs = ({ menu }) => {
	return (
		<Menu>
			<List to="/">Home</List>
			{menu && <List2>&nbsp;/ {menu}</List2>}
		</Menu>
	)
}

export default Breadcrumbs

const Menu = styled.span`
	padding: 10px ;20px;
	display: block;
`
const List = styled(Link)`
	display: inline-flex;
	color: #0099ff;
	text-decoration: none;
`
const List2 = styled.span`
	display: inline-flex;
`
