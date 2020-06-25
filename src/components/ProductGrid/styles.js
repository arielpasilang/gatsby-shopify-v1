import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: block;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  width: 100%;
  align-items: right;
  flex-direction: row;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-family: 'Roboto', sans-serif;
  margin: 20px 0;
  a {
    width: 40%;
  }
  a > div {
    height: 150px;
    margin-bottom: 0;
    border-radius: 15px;
  }
  .description {
    width: 60%;
    padding: 10px;
  }
`

export const Title = styled.span`
  font-weight: bold;
  display: block;
  font-size: 12pt;
  margin-bottom: 5px;
`

export const Description = styled.span`
  font-weight: normal;
  display: block;
  font-size: 10pt;
  color: #979797;
  margin-bottom: 5px;
`

export const PriceTag = styled.span`
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  margin-top: 15px;
  color: #0099ff;
`
