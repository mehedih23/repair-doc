import './Header.css'
import React, { useState } from 'react'
import CustomLink from '../CustomLink/CustomLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='brand-logo'>Repair <span className='doc'>DOC</span></div>
                <ul style={{ top: `${expand ? '4.7rem' : '-15rem'}` }} className='nav-CustomLinks'>
                    <li><CustomLink className='link' to='/services'>Services</CustomLink></li>
                    <li><CustomLink className='link' to='/onlinestore'>Online Store</CustomLink></li>
                    <li><CustomLink className='link' to='/partnership'>Partnership</CustomLink></li>
                    <li><CustomLink className='link' to='/contactus'>Contact Us</CustomLink></li>
                    <li><CustomLink className='link' to='/login'>Login</CustomLink></li>
                </ul>
                <div onClick={() => setExpand(!expand)} className='icon'>
                    {
                        expand ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header