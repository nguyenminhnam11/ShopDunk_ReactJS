import React, { useState } from 'react';
import './Navbar.css'

import logo from '../../images/Logo_ShopDunk.png'
import { Link } from 'react-router-dom';
function Navbar(props) {
    const [ activeMenu, setActiveMenu ] = useState('')
    return (
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="" className={activeMenu === '/' ? 'nonActive' : ''} onClick={() => setActiveMenu('/')}/></Link>
                </div>
                <ul className='menu'>
                <Link to='/iphone' style={{textDecoration: 'none'}} ><li className={activeMenu === 'iphone' ? 'active' : ''} onClick={() => setActiveMenu('iphone')}>Iphone</li></Link>
                <Link to='/ipad' style={{textDecoration: 'none'}} ><li className={activeMenu === 'ipad' ? 'active' : ''} onClick={() => setActiveMenu('ipad')}>Ipad</li></Link>
                <Link to='/macbook' style={{textDecoration: 'none'}}><li className={activeMenu === 'mac' ? 'active' : ''} onClick={() => setActiveMenu('mac')}>Mac</li></Link>
                <Link to='/watch' style={{textDecoration: 'none'}}><li className={activeMenu === 'watch' ? 'active' : ''} onClick={() => setActiveMenu('watch')}>Watch</li></Link>
                <Link to='/sound' style={{textDecoration: 'none'}}><li className={activeMenu === 'sound' ? 'active' : ''} onClick={() => setActiveMenu('sound')}>Âm thanh</li></Link>
                <Link to='/accessory' style={{textDecoration: 'none'}}><li className={activeMenu === 'accessory' ? 'active' : ''} onClick={() => setActiveMenu('accessory')}>Phụ kiện</li></Link>
                <Link to='/contact' style={{textDecoration: 'none'}}><li className={activeMenu === 'contact' ? 'active' : ''} onClick={() => setActiveMenu('contact')}>Liên hệ</li></Link>
                </ul>
                <div className='nav-actions'>
                    <p><i className='bx bx-search-alt-2'></i></p>
                    <p><i className='bx bx-cart-alt'></i><span>0</span></p>
                    <Link style={{textDecoration: 'none'}} to='/login'><p><i className='bx bx-user'></i></p></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;