import { Container, Row, Col, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ScrollToTop from "react-scroll-to-top";
import styles from "./footer.module.scss"

const Footer = () => {


  return (
    <>
      <section className="foot bg-light bg-border-btm bg-border-top pb-1" id={styles["footer"]}>
        <Container style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <Row className='col-lg-12'>
            <div className='col-lg-4'>
              <h3 style={{ marginBottom: '35px' }}>Subscribe to Newsletter</h3>
              <p style={{ marginBottom: '35px' }}>We do not spam. We send offers instead.</p>
              <InputGroup>
                <Form.Control
                  className={styles['input-group']}
                  placeholder="Your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  className={styles['newsbtn']}
                  variant="outline-secondary" id="button-addon2">
                  Subcribe
                </Button>
              </InputGroup>
            </div>
            <div className='offset-lg-1 col-lg-2'>
              <h3 style={{ marginBottom: '35px' }}>Info</h3>
              <ul className={styles['info-list']}>
                <li><Link href="/">History</Link></li>
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms</Link></li>
                <li><Link href="/">Support</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>
            <div className='offset-lg-1 col-lg-4'>
              <h3 style={{ marginBottom: '35px' }}>Connect with us</h3>
              <p style={{ marginBottom: '35px' }}>Ut morbi tincidunt augue interdum velit euismod in. Dignissim enim sit amet venenatis urna cursus ege vitae nunc sed velit digni</p>
              <ul className='d-flex' style={{ listStyle: 'none' }}>
                <li className={styles['footer-links']}><Image
                  height="40"
                  width="40"
                  objectFit="contain"
                  src="/images/facebook.png"
                  alt="logo_img" />
                </li>
                <li className={styles['footer-links']}><Image
                  height="40"
                  width="40"
                  objectFit="contain"
                  src="/images/instagram.png"
                  alt="logo_img" />
                </li>
                <li className={styles['footer-links']}><Image
                  height="40"
                  width="40"
                  objectFit="contain"
                  src="/images/linkedin.png"
                  alt="logo_img" />
                </li>
                <li className={styles['footer-links']}><Image
                  height="40"
                  width="40"
                  objectFit="contain"
                  src="/images/twitter.png"
                  alt="logo_img" />
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <hr
          style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '1.5spx',
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="12" md={6}>
              <div className="d-flex justify-content-center" id={styles['footer-Copy']}>
                <p><small>&copy;Copyright &copy;All rights reserved</small></p>
                <p><small> --This site by Heuristic Academy</small></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section >
      <ScrollToTop smooth color="#d7b56d" height="20" style={{ backgroundColor: "#000" }} />

    </>
  )
}

export default Footer