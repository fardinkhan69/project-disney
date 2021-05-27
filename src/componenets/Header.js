import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <div>
            <Nav>
                <Logo src="/images/logo.svg" />
                <NavMenu>
                    <a href="/home">
                        <img src="/images/home-icon.svg" alt="home icon" />
                        <span>HOME</span>
                    </a>
                    <a href="/search">
                        <img src="/images/search-icon.svg" alt="home icon" />
                        <span>Search</span>
                    </a>
                    <a href="/watchlist">
                        <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
                        <span>watchlist</span>
                    </a>
                    <a href="/originals">
                        <img src="/images/original-icon.svg" alt="home icon" />
                        <span>Originals</span>
                    </a>
                    <a href="/movies">
                        <img src="/images/movie-icon.svg" alt="home icon" />
                        <span>Movies</span>
                    </a>
                    <a href="/series">
                        <img src="/images/series-icon.svg" alt="home icon" />
                        <span>series</span>
                    </a>

                    
                    
                </NavMenu>
                <UserImage src="https://yt3.ggpht.com/yti/ANoDKi4_qMso7eTeGNoWYhh_CCCtPnU2RxN6zvawAPII=s88-c-k-c0x00ffffff-no-rj-mo" />
            </Nav>
        </div>
    );
};

export default Header;

const Nav = styled.nav`
background-color: #090b13;
height:70px;
display: flex;
align-items: center;
padding: 0 36px;
`

const Logo = styled.img`
width: 40px;


`

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left: 28px;
align-items: center;

    a{
        display: flex;
        align-items: center;
        padding:0 12px ;

        img{
            height: 24px;
        }
        span{
            font-size:13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transform: scaleX(0);
                opacity: 0;
                transition: all .3s ease;

            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`