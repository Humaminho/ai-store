import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import Nav from './Nav'
import Cart from './Cart'

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <Link to='/'>LOGO</Link>
        <Burger />
        <Nav />
        <Cart />
      </div>
    </div>
  )
}
