import React, { useState, useEffect } from "react";
import styles from "./checkout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import CheckoutLogin from './checkoutLogin'
import Shipping from "./shipping";
import Payment from "./payment";
import Placeorder from "./placeorder";
import { LinkContainer } from 'react-router-bootstrap'



const index = () => {

  const currentUser = useSelector((state) => state.user);
  console.log(currentUser)

  return (
    <section className={styles["checkout-section"]}>
      <Container>
        <Row>
          <Col lg={12}>
            {currentUser && currentUser.currentUser ? (
              <>
                <Shipping styles={styles} />
                <Payment styles={styles} />
                <Placeorder styles={styles} />
              </>
            ) : (
              <CheckoutLogin />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
