import React, { useState, useEffect } from "react";
import styles from "./checkout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useRouter } from "next/router";
import Shipping from "./shipping";
import Payment from "./payment";
import Placeorder from "./placeorder";

const KEY = process.env.NEXT_PUBLIC_REACT_APP_STRIPE;

const index = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useRouter();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/complete/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  console.log(stripeToken);

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

          {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button> */}
          {/* <StripeCheckout
                name="Qirah Test"
                image='https://m.media-amazon.com/images/I/51vwDpwSeDL._SL1024_.jpg'
                billingAddress
                shippingAddress
                description={`Your total is Rs${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button
                  style={{ marginBottom: '5px' }}
                  className={styles['newsbtn']}
                  variant="outline-secondary" id="button-addon2">
                  Continue to checkout
                </Button>
              </StripeCheckout> */}
        </Row>
      </Container>
    </section>
  );
};

export default index;
