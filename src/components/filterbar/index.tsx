import React from 'react';
import {Container, Category, Brand} from './stlyes'
import {useDispatch} from 'react-redux'
import {coffeeList} from '../../reducers/coffeeReducer'

export default function Filterbar(): JSX.Element {
  const dispatch = useDispatch()
  return <Container>
    <Category>
      <Brand onClick={(e)=> {
        const target = e.target as HTMLDivElement
        dispatch(coffeeList(target.textContent))
      }}>ALL</Brand>
      <Brand onClick={(e)=> {
        const target = e.target as HTMLDivElement
        dispatch(coffeeList(target.textContent))
      }}>COFFEE</Brand>
      <Brand onClick={(e)=> {
        const target = e.target as HTMLDivElement
        dispatch(coffeeList(target.textContent))
      }}>TEA</Brand>
      <Brand onClick={(e)=> {
        const target = e.target as HTMLDivElement
        dispatch(coffeeList(target.textContent))
      }}>SMOOTHIE</Brand> 
      </Category>
  </Container>
}
