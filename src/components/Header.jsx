import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <Link to={'/'}><h1>토익 영단어 (고급)</h1   ></Link>
            <div className='menu'>
                <Link /* to={} */ className='link'>단어추가</Link>
                <Link /* to={} */ className='link'>Day 추가</Link>
            </div>
        </div>
    );
}

export default Header;