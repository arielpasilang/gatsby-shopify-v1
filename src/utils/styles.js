import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0 !important;
      }
      html {
        font-family: 'Roboto', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  max-height: 380px;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 460px;
  padding: 15px;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const Button = styled.button`
  background: rebeccapurple;
  color: #fff;
  border-color: transparent;
  border-width: 0;
  border-radius: 10px;
  height: 35px;
  padding: 0 12px;
  font-weight: bold;
`
