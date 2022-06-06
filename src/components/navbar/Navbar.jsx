import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = ()=>{
  return(
    <>
      <p><a href='#Home'>Home</a></p>
      <p><a href='#whatgpt3'>Whats is GPT3</a></p>
      <p><a href='#possibility'>Open Ai</a></p>
      <p><a href='#features'>Case Study</a></p>
      <p><a href='#blog'>Libray</a></p>
    </>
  )
}

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links-container'>
            <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in </p>
        <button>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
         {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line  color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
         }
         {toggleMenu &&  (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt2__navbar-container-links'>
                <Menu/>
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in </p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
         )}
      </div>
    </div>
  )
}

export default Navbar