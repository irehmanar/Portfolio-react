import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { MdHome } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
function Nav() {
  const [activeNav,setActiveNave] = useState('#')
  return (
<nav>
  <a href="#" onClick={()=> setActiveNave('#')} className={activeNav === '#' ? 'active' : ''}><MdHome /></a>
  <a href="#About" onClick={()=> setActiveNave('#About')}  className={activeNav === '#About' ? 'active' : ''} ><IoPersonSharp /></a>
  <a href="#Experience"  onClick={()=> setActiveNave('#Experience')}  className={activeNav === '#Experience' ? 'active' : ''}><FaRegAddressBook /></a>
  <a href="#Services"  onClick={()=> setActiveNave('#Services')}  className={activeNav === '#Services' ? 'active' : ''}><RiServiceFill /></a>
  <a href="#Contact"  onClick={()=> setActiveNave('#Contact')}  className={activeNav === '#Contact' ? 'active' : ''}><IoMdContacts /></a>
  {/* <a href="#"></a> */}
</nav>
  )
}

export default Nav
