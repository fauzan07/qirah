import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import { FaCartPlus, FaUser } from "react-icons/fa";
import styles from "../master/header.module.scss";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-6JW6YCP2XW");
}

const Header = () => {
  if (isMobile) {
    $(".nav-link").click(function () {
      // if(!$(this).hasClass("dropdown-toggle")){
      $("#navcolbtn").click();
      // }
    });
  }

  const currentUser = useSelector((state) => state.user);
  // const { userInfo } = userLogin;

  const quantity = useSelector(state => state.cart.quantity)

  const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <title>safarikids</title>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* //  <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6JW6YCP2XW"
        ></script>
      </Head>
      <header>
        <Navbar className={`${styles["nav-clr"]} `} expand="lg" fixed="top">
          <Container fluid id="header11">
            <Link className="navbar-brand" href="/">
              <Image
                key=""
                height="180"
                width="180"
                objectFit="contain"
                src="/images/logo.jpg"
                alt="logo_img"
              />
            </Link>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="navbar-nav mr-auto w-100 justify-content-end clearfix"
                navbarScroll
              >
                <Link className={`${styles['pad-a']} nav-link pe-5`} href="/">
                  Home
                </Link>
                <Link className={`${styles['pad-a']} nav-link pe-5`} href="/">
                  Shop
                </Link>
                <NavDropdown className={`${styles['pad-a1']} pe-5`} title="Page's">
                  <NavDropdown.Item>
                    <Link className={`${styles['']} nav-link pe-5`} href="/">
                      About
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className={`${styles['']} nav-link pe-5`} href="/blog">
                      Blog
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className={`${styles['']} nav-link pe-5`} href="/">
                      Faq
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link className={`${styles['pad-a']} nav-link pe-5`} href="/contact">
                  Contact
                </Link>
                <Link className="nav-link pe-5" href="/cart">
                  <button
                    type="button"
                    className={`${styles['cart-btn']} btn position-relative`}
                  >
                    <span className={styles['cart-icon']}><FaCartPlus /></span>
                    <span className={`${styles['cart-badge']} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                      {quantity}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
                {currentUser && currentUser.currentUser ? (
                  <NavDropdown title={currentUser.currentUser.userName} id="username">
                    {/* <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item> */}
                  </NavDropdown>
                ) : (
                  <Link className={`${styles['pad-a']} nav-link pe-5`} href="/login">
                    <FaUser /> Sign In
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="navbarScroll" id="navcolbtn">
              <span className={styles["togg-btn"]}>
                <IoReorderThree />
              </span>
            </Navbar.Toggle>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
