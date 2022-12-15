// Import React Libraries
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import Icons
import { IoSearch } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FiBookmark, FiUser } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';

// Import Data
import itemNav from '../../data/itemNav';
import trendSearchList from '../../data/trendSearchList';

// Style CSS
import './navbar.scss';

function GlobalNav({ status }) {
    // State
    const [search, setSearch] = useState(false);
    const [cart, setCart] = useState(false);

    // Ref
    const navbar = useRef();
    const spacing = useRef();

    // Search Function
    search
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset');
    const handleSearchButton = () => {
        const searchInput = document.querySelector('.ac-gn-searchform-input');
        // Clear input value
        searchInput.value = '';
        // Page to top when search is open
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // Toggle search state
        setCart(false);
        setSearch(!search);
    };

    // Cart Function
    const handleCartButton = () => {
        setCart(!cart);
    };

    useEffect(() => {
        status === 'fixed' &&
            (spacing.current.style.paddingTop =
                navbar.current.clientHeight + 'px');
    }, []);

    return (
        <header className="ac-globalheader">
            <nav
                id="ac-globalnav"
                className={status === 'fixed' ? 'fixed-mode' : ''}
                role="navigation"
                ref={navbar}>
                <div className="ac-gn-content">
                    {/* Navbar */}
                    <ul className={search ? 'ac-gn-list hide' : 'ac-gn-list'}>
                        {/* Logo */}
                        <li className="ac-gn-meta">
                            <Link
                                to="/"
                                className="ac-gn-meta-link">
                                <img
                                    src="/assets/svg/walmart.svg"
                                    alt="meta"
                                    className="ac-gn-meta-logo"
                                />
                            </Link>
                        </li>

                        {/* Categories */}
                        <li className="ac-gn-item-menu">
                            <ul className="item-menu">
                                {itemNav.map(({ name, link }, index) => (
                                    <li
                                        className="ac-gn-item"
                                        key={index}>
                                        <a
                                            href={`/${link}`}
                                            className={`ac-gn-link ac-gn-link-${link}`}>
                                            <span className="ac-gn-link-text">
                                                {name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Search & Mini Cart */}
                        <li className="ac-gn-utils">
                            <ul className="utils">
                                <li
                                    className="ac-gn-search"
                                    onClick={handleSearchButton}>
                                    <IoSearch />
                                </li>
                                <li
                                    className="ac-gn-cart"
                                    onClick={handleCartButton}>
                                    <RiShoppingCartLine />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* Active Search Nav*/}
                    <aside
                        className={
                            search
                                ? 'ac-gn-seachview active'
                                : 'ac-gn-seachview'
                        }>
                        <div className="ac-gn-searchview-content">
                            <div className="ac-gn-searchview-bar">
                                <form
                                    className="ac-gn-searchform"
                                    action=""
                                    method="GET">
                                    <div className="ac-gn-searchform-wrapper">
                                        <input
                                            type="text"
                                            className="ac-gn-searchform-input"
                                            placeholder="Search localhost:3000"
                                        />
                                        <button
                                            id="ac-gn-searchform-submit"
                                            className="ac-gn-searchform-submit"
                                            type="submit"
                                            disabled
                                            aria-label="Submit Search">
                                            <IoSearch />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="ac-gn-searchview-quicklinks">
                                <h2 className="ac-gn-searchview-quicklinks-heading">
                                    <i>Hot search</i>
                                </h2>
                                <ul className="ac-gn-searchview-quicklinks-list">
                                    {trendSearchList.map(
                                        ({ name, link }, index) => (
                                            <li
                                                className="ac-gn-searchview-quicklinks-item"
                                                key={index}>
                                                <Link
                                                    to={`/${link}`}
                                                    className="ac-gn-searchview-quicklinks-link">
                                                    {name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </aside>
                    {/* Active Mini Cart */}
                    <aside
                        className={
                            cart ? 'ac-gn-bagview active' : 'ac-gn-bagview'
                        }>
                        <div className="ac-gn-bagview-caret" />
                        <div class="ac-gn-bagview-content">
                            <p class="ac-gn-bagview-message">
                                Your Bag is empty.
                            </p>
                            <nav class="ac-gn-bagview-nav">
                                <ul class="ac-gn-bagview-nav-list">
                                    <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag">
                                        <RiShoppingCartLine class="ac-gn-bagview-nav-icon" />
                                        <Link
                                            to="/shop/cart"
                                            class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-bag">
                                            Bag
                                        </Link>
                                    </li>
                                    <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-savedbyyou">
                                        <FiBookmark class="ac-gn-bagview-nav-icon" />
                                        <Link
                                            to="/shop/saveditems"
                                            class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-savedbyyou">
                                            Saved Items
                                        </Link>
                                    </li>
                                    <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-orders">
                                        <BsBoxSeam class="ac-gn-bagview-nav-icon" />
                                        <Link
                                            class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-orders"
                                            to="/shop/order/list">
                                            Orders
                                        </Link>
                                    </li>
                                    <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account">
                                        <FiUser className="ac-gn-bagview-nav-icon" />
                                        <Link
                                            to="/shop/account/home"
                                            class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-account">
                                            Account
                                        </Link>
                                    </li>
                                    <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn">
                                        <IoMdExit class="ac-gn-bagview-nav-icon" />
                                        <Link
                                            to="/shop/signIn"
                                            class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn">
                                            Log in
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </div>
            </nav>

            {search && (
                <div
                    className="overlay show"
                    onClick={() => {
                        setSearch(false);
                        setCart(false);
                    }}></div>
            )}
            <div
                className="spacing-navbar"
                ref={spacing}></div>
        </header>
    );
}

export default GlobalNav;
