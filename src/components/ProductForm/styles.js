import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Price = styled.span`
	display: block;
	font-size: 20px;
	color: #0099ff;
	margin: 15px 0;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 2px solid #f2f3f4;
`

export const ProductData = styled.ul`
	list-style: none;
	padding-left: 0;
	margin-bottom: 100px;
`

export const List = styled.li`
	display: flex;
	position: relative;
	margin: 10px 0;
	height: 30px;
`

export const Label = styled.label`
	width: 25%;
	line-height: 25px;
	color: #979797;
	font-family: Roboto, sans-serif;
	font-weight: 500;
`
export const Value = styled.span`
	width: 75%;
	line-height: 25px;
`

export const Select = styled.select`
	width: 25%;
	min-width: 250px;
	height: 30px;
`
export const Input = styled.input`
	width: 75%;
	max-width: 244px;
`

export const Wrapper = styled.div`
	background: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	height: 60px;
	margin: 0 auto;
	width: 100%;
	display: flex;
	box-shadow: 0 -2px 2px -2px #ccc;
`

export const BuyNow = styled.button`
	color: white;
	text-decoration: none;
	font-size: 16px;
	font-weight: bold;
	position: relative;
	height: 40px;
	margin: 10px;
	width: 50%;
	line-height: 36px;
	text-align: center;
	border: 1px solid #0099ff;
	border-radius: 20px;
	color: #fff;
	background-color: #0099ff;
	&:hover {
		text-decoration: none;
		color: #0099ff;
		background-color: #fff;
	}
`

export const AddCart = styled.button`
	color: white;
	text-decoration: none;
	font-size: 16px;
	font-weight: bold;
	position: relative;
	height: 40px;
	margin: 10px;
	width: 50%;
	line-height: 36px;
	text-align: center;
	border: 1px solid #0099ff;
	border-radius: 20px;
	color: #0099ff;
	background-color: #fff;
	&:hover {
		text-decoration: none;
		color: #fff;
		background-color: #0099ff;
	}
`
export const ViewCart = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 16px;
	font-weight: bold;
	position: relative;
	height: 38px;
	margin: 10px;
	width: 50%;
	line-height: 36px;
	text-align: center;
	border: 1px solid #0099ff;
	border-radius: 20px;
	color: #0099ff;
	background-color: #fff;
	position: relative;
	&:hover {
		text-decoration: none;
		color: #fff;
		background-color: #0099ff;
	}
	span {
		border: 1px solid #0099ff;
		background-color: #fff;
		color: #0099ff;
		border-radius: 15px;
		padding: 2px 7px;
		font-size: 10px;
		position: absolute;
		margin: -10px;
		z-index: 20;
		right: 0;
		height: 20px;
		line-height: 22px;
		width: 10px;
	}
`
