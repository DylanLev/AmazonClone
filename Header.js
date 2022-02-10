import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <img
            className='header__logo'
            src='https://m.media-amazon.com/images/G/08/gc/designs/livepreview/amazon_squidink_noto_email_v2016_fr-main._CB463436975_.png'
            />

        <div 
        className='header__search'>
            <input
                className='header__searchInput' type='text' />
                <SearchIcon
                    className='header__searchIcon'/>
        
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                <span
                className='header__optionLineOne'>
                    Hello Guest
                </span>
                <span
                className='header__optionLineTwo'>
                    Sign In
                </span>

                </div>

                <div className='header__option'>
                <span
                className='header__optionLineOne'>
                    Returns
                </span>
                <span
                className='header__optionLineTwo'>
                    Orders
                </span>

                </div>
                <div className='header__option'>
                <span
                className='header__optionLineOne'>
                    Your
                </span>
                <span
                className='header__optionLineTwo'>
                    Prime
                </span>

                </div>

            </div>
            
            

        
    </div>


  )
}

export default Header