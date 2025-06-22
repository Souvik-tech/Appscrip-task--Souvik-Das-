import React from 'react';
import topIcon from '../../../public/img/topheaderIcon.png';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});
import Image from 'next/image';
const Header = () => {
    const [active, setActive] = useState(false);
    const mobileMenu = () => {
        setActive(!active);
    }
    return (
        <header>

            <div className='top-header'>
                <div className='container'>
                    <div className='top-header-Wrap'>
                        <div className='eachset'>
                            <figure>
                                <Image src="/img/topheaderIcon.png" alt="Top Icon" width={16} height={16} />
                            </figure>
                            <h6>Lorem ipsum dolor</h6>
                        </div>
                        <div className='eachset eachset2'>
                            <figure>
                                <Image src="/img/topheaderIcon.png" alt="Top Icon" width={16} height={16} />
                            </figure>
                            <h6>Lorem ipsum dolor</h6>
                        </div>
                        <div className='eachset'>
                            <figure>
                                <Image src="/img/topheaderIcon.png" alt="Top Icon" width={16} height={16} />
                            </figure>
                            <h6>Lorem ipsum dolor</h6>
                        </div>
                    </div>
                </div>

            </div>
            <div className='main-header'>
                <div className='container'>
                    <div className='main-header-Wrap'>
                        <div className='logo'>
                            <Image
                                src="/img/mobile-menu.png"
                                alt="menu-icon" className='mobile-menu' width={20} height={20} onClick={mobileMenu}/>
                            <Image src="/img/Logo.png" alt="Logo" width={35} height={35} />
                        </div>
                        <div className='logo-text'>
                            <h2 className={inter.className}>Logo</h2>
                        </div>
                        <div className='icon-list'>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <Image src="/img/search-normal.png" alt="search-icon" width={24} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/img/heart.png" alt="wishlist" width={24} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/img/shopping-bag.png" alt="cart" width={24} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/img/profile.png" alt="profile" width={24} height={24} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bottom-header ${active ? 'active' : ''}`}>
                <div className='container'>
                    <div className='bottom-header-Wrap'>
                        <div className='bottom-header-right'>
                            <ul>
                                <li><Link href="#">SHOP</Link></li>
                                <li><Link href="#">SKILLS</Link></li>
                                <li><Link href="#">STORIES</Link></li>
                                <li><Link href="#">ABOUT</Link></li>
                                <li><Link href="#">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;