import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
              {/* Page Preloder */}
                <div id="preloder">
                <div className="loader" />
                </div>
                {/* Offcanvas Menu Begin */}
                <div className="offcanvas-menu-overlay" />
                <div className="offcanvas-menu-wrapper">
                  <div className="offcanvas__option">
                    <div className="offcanvas__links">
                      <a href="#">Sign in</a>
                      <a href="#">FAQs</a>
                    </div>
                    <div className="offcanvas__top__hover">
                      <span>Usd <i className="arrow_carrot-down" /></span>
                      <ul>
                        <li>USD</li>
                        <li>EUR</li>
                        <li>USD</li>
                      </ul>
                    </div>
                  </div>
                  <div className="offcanvas__nav__option">
                    <a href="#" className="search-switch"><img src="assets/img/icon/search.png" alt="" /></a>
                    <a href="#"><img src="assets/img/icon/heart.png" alt="" /></a>
                    <a href="#"><img src="assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                    <div className="price">$0.00</div>
                  </div>
                  <div id="mobile-menu-wrap" />
                  <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                  </div>
                </div>
                {/* Offcanvas Menu End */}
                {/* Header Section Begin */}
                <header className="header">
                  <div className="header__top">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6 col-md-7">
                          <div className="header__top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                          <div className="header__top__right">
                            <div className="header__top__links">
                              <a href="#">Sign in</a>
                              <a href="#">FAQs</a>
                            </div>
                            <div className="header__top__hover">
                              <span>Usd <i className="arrow_carrot-down" /></span>
                              <ul>
                                <li>USD</li>
                                <li>EUR</li>
                                <li>USD</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                          <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                          <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li><a href="#">Pages</a>
                              <ul className="dropdown">
                                <li><Link to="/about_us">About Us</Link></li>
                                <li><Link to="/shop_details">Shop Details</Link></li>
                                <li><Link to="/shopping_cart">Shopping Cart</Link></li>
                                <li><Link to="/check_out">Check Out</Link></li>
                                <li><Link to="/blog_details">Blog Details</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                          <a href="#" className="search-switch"><img src="assets/img/icon/search.png" alt="" /></a>
                          <a href="#"><img src="assets/img/icon/heart.png" alt="" /></a>
                          <a href="#"><img src="assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                          <div className="price">$0.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars" /></div>
                  </div>
                </header>
                {/* Header Section End */}
            </div>
        );
    }
};

export default Header