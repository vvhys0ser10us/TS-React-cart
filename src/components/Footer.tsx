import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <h3>Typescript + React Shopping Cart &copy; {year}</h3>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  text-align: center;
  background: #333;
  color: #fff;
  letter-spacing: 2px;
  padding: 1rem;
  display: grid;
  place-items: center;
`
export default Footer
