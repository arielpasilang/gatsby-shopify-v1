import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  margin: 0 auto;
  width: 100%;
`

export const CartLink = styled(Link)`
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

export const CartCounter = styled.span`
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
`
