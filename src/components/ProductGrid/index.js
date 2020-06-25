import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import Image from 'gatsby-image'

const ProductList = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              tags
              title
              handle
              createdAt
              description
              images {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <div>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(
            ({
              node: {
                id,
                title,
                description,
                handle,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => (
              <Card>
                <Product>
                  <Title>
                    <Link to={`/product/${handle}`}>{title.toUpperCase()}</Link>
                  </Title>
                  <Description>{description.slice(0, 200)}</Description>
                  <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
                </Product>
                <ImageContainer>
                  <Image fluid={firstImage.localFile.childImageSharp.fluid} />
                </ImageContainer>
              </Card>
            )
          )
        : null}
    </div>
  )
}

export default ProductList

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-flow: row;
  min-height: 110px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: 1px solid #ebebeb;
`
const Product = styled.div`
  width: 65%;
  padding: 10px 15px;
`
const Title = styled.span`
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #000;
  }
`
const Description = styled.span`
  display: block;
  font-family: Roboto, sans-serif;
  color: #979797;
  font-size: 14px;
  line-height: 15px;
  margin-bottom: 10px;
`

const PriceTag = styled.span`
  display: block;
  font-family: Montserrat, sans-serif;
  color: #0099ff;
  font-weight: 700;
`

const ImageContainer = styled.div`
  width: 35%;
  div {
    max-width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
`
