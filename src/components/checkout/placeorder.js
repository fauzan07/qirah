import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useRouter } from "next/router";
const KEY = process.env.NEXT_PUBLIC_REACT_APP_STRIPE;


const Placeorder = ({ styles }) => {

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
      } catch { }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  console.log(stripeToken);

  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col lg={6}>
            <h3>Shipping</h3>
            <p>Address:5,Dhobi Street, tawawala building, 2nd floor, mohd ali road, mumbai 400003</p>
            <hr />
            <h3>Payment Method</h3>
            <p>Method : Stripe</p>
            <hr />
            <h3>Order Items</h3>
            {cart.products.map((product) => {
              return (
                <>
                  <div className='d-flex justify-content-between'>
                    <p>{product.postTopicName}</p>
                    <p>{product.price}</p>
                  </div>
                </>
              )
            })}
          </Col>
          <Col lg={{ span: 4, offset: 2 }}>
            <div className='border box shadow rounded-3 p-4'>
              <h3>Order Summary</h3>
              <hr />
              <div className='d-flex justify-content-between'>
                <p>Items</p>
                <p>{cart.total}.00</p>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <p>Shipping</p>
                <p>00.00</p>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <p>Tax</p>
                <p>00.00</p>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{cart.total}.00</p>
              </div>
              <hr />
              <div className='text-center'>
                <StripeCheckout
                  name="Qirah Test"
                  image='https://m.media-amazon.com/images/I/51vwDpwSeDL._SL1024_.jpg'
                  billingAddress
                  shippingAddress
                  description={`Your total is Rs${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <Button className='w-100' variant='outline-dark' href=''>Place Order</Button>
                </StripeCheckout>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Placeorder
