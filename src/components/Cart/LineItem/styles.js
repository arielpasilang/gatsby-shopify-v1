import styled from '@emotion/styled'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 15px;
	border: 1px solid #f2f3f4;
	text-align: center;
	margin: 20px 0;
	a img {
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
		height: 100%;
	}
`
export const ProductData = styled.div`
	display: grid;
`

export const Title = styled.p`
	font-size: 16px;
	font-weight: bold;
`
export const Actions = styled.div`
	display: grid;
	text-align: center;
	padding: 10px;
`
export const Button = styled.button`
	color: #0099ff;
	border-width: 0;
	height: 25px;
	font-weight: bold;
	padding: 0 2px;
	background: unset;
	border-bottom: 1px solid #0099ff;
	margin-top: 10px;
`

export const Count = styled.div`
	display: flex;
`

export const Quantity = styled.input`
	width: 30px;
	text-align: center;
	border-top: 1px solid #f2f3f4;
	border-bottom: 1px solid #f2f3f4;
	border-left: unset;
	border-right: unset;
`
export const Minus = styled.span`
	width: 20px;
	border: 1px solid #f2f3f4;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
`

export const Plus = styled.span`
	width: 20px;
	border: 1px solid #f2f3f4;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
`
