import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Placeorder = ({styles}) => {
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
            <Col lg={6}>
                <h3>Shipping</h3>
                <p>Address:ajdhs,andnfeunfu, cwhgfujndfjdmncin,262250.nuhfiefn</p>
                <hr/>
                <h3>Payment Method</h3>
                <p>Method : PayPal</p>
                <hr/>
                <h3>Order Items</h3>
                <div className='d-flex justify-content-between'>
                <p>Hair Oil</p>
                <p>$500</p>
                </div>
            </Col>
            <Col lg={{span:4,offset:2}}>
                <div className='border box shadow rounded-3 p-4'>
                <h3>Order Summary</h3>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <p>Items</p>
                    <p>$500.00</p>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <p>Shipping</p>
                    <p>$0.00</p>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <p>Tax</p>
                    <p>$150.00</p>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>$650.00</p>
                </div>
                <hr/>
                <div className='text-center'>
                <Button className='w-100' variant='outline-dark' href=''>Place Order</Button>
                </div>

                </div>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Placeorder
