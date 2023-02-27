import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <p>Typescript + React Shopping Cart &copy; {year}</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  text-align: center;
  background: black;
  color: #fff;
  letter-spacing: 2px;
  padding: 1rem;
  display: grid;
  place-items: center;
`
export default Footer
