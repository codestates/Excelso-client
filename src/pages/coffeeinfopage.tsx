import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import CoffeesInfo from '../container/coffeeInfo'

export default function Coffeeinfopage({location}: any): JSX.Element{
  return (
    <>
      <Nav></Nav>
      <CoffeesInfo location={location}></CoffeesInfo>
      <Footer></Footer>
    </>
  )
}
