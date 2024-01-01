import React, { useState, useEffect } from "react";
import styles from "./checkout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import Card from "react-bootstrap/Card";
import Shipping from "./shipping";
import Payment from "./payment";
import Placeorder from "./placeorder";


const index = () => {


  return (
    <section className={styles["checkout-section"]}>
      <Container>
        <Row>
          <Col lg={12}>
            <Tabs
              defaultActiveKey="signin"
              id="fill-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="signin" title="Sign In">
                Tab content for Home
              </Tab>
              <Tab eventKey="shipping" title="Shipping">
                <Shipping styles={styles} />
              </Tab>
              <Tab eventKey="payment" title="Payment">
                <Payment styles={styles} />
              </Tab>
              <Tab eventKey="palceorder" title="Place Order" >
                <Placeorder styles={styles} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
