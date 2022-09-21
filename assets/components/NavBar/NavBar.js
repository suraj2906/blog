import React from 'react'
import Button from '../Button/Button';
import Link from 'next/link';



const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        
        <Link href = {'/'}><a><li className="logo">ProcProg</li></a></Link>
        <Link href = {'/'}><a><li>Home</li></a></Link>
        <Link href = {'/Blogs'}><a><li>Blogs</li></a></Link>
        <Link href = {'/Socials'}><a><li>Socials</li></a></Link>
    </ul>
    <Button name = "GitHub" style={{margin: '0 0 0 45em', width: 169, height: 35, marginTop: 21}}></Button>
    </div>
  )
}

export default NavBar