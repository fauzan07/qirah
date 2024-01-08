import { Container, Row, Col, Stack } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ScrollToTop from "react-scroll-to-top";
import { FaLocationDot, FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <section
        className="foot bg-light bg-border-btm bg-border-top pb-1"
        id={styles["footer"]}
      >
        <Container style={{ paddingTop: "120px", paddingBottom: "60px" }}>
          <Row className="col-lg-12">
            <div className="col-lg-3">
              <h3 style={{ marginBottom: "35px" }}>Quick Links</h3>
              <ul className={styles["info-list"]}>
                <li>
                  <Link href="/#">Home</Link>
                </li>
                <li>
                  <Link href="/#shop">Shop</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className=" col-lg-3">
              <h3 style={{ marginBottom: "35px" }}>Support</h3>
              <ul className={styles["info-list"]}>
                <li>
                  <Link href="/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 style={{ marginBottom: "35px" }}>Contact Details</h3>
              <p>
                <strong>
                  <span style={{ color: "#d7b56d" }}>
                    <FaLocationDot />
                  </span>
                  &nbsp; Address
                </strong>
              </p>
              <p>
                TMZ HEALTHCARE, Post Chave Rd, Bhiwandi, Thane - 421302, India
              </p>
              <p>
                <strong>
                  <span style={{ color: "#d7b56d" }}>
                    <FaPhone />
                  </span>
                  &nbsp; +91 8104583429
                </strong>
              </p>
              <p>
                <strong>
                  <span style={{ color: "#d7b56d" }}>
                    <IoMail />
                  </span>
                  &nbsp; info@qirah-haircare.com
                </strong>
              </p>
              <p>
                <strong>
                  <span style={{ color: "#d7b56d" }}>
                    <FaSquareInstagram />
                  </span>
                  &nbsp; qirah_oil
                </strong>
              </p>
            </div>
            <div className="col-lg-3">
            <h3 style={{ marginBottom: "35px" }}>Social Links</h3>
              <ul className="d-flex" style={{ listStyle: "none" }}>
                <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/facebook.png"
                    alt="logo_img"
                  />
                </li>
                <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/instagram.png"
                    alt="logo_img"
                  />
                </li>
                <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/linkedin.png"
                    alt="logo_img"
                  />
                </li>
                <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/twitter.png"
                    alt="logo_img"
                  />
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "1.5spx",
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="12" md={6}>
              <div
                className="d-flex justify-content-center"
                id={styles["footer-Copy"]}
              >
                <p>
                  <small>&copy;Copyright &copy;All rights reserved</small>
                </p>
                <p>
                  <small> --This site by Heuristic Academy</small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollToTop
        smooth
        color="#d7b56d"
        height="20"
        style={{ backgroundColor: "#000" }}
      />
    </>
  );
};

export default Footer;
