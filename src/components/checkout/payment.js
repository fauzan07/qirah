import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const Payment = ({ styles }) => {

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={12}>
            <h3 className="mb-4">Payment Method</h3>
            <Form>
              <Form.Label className={styles['txt-lbl']}>Select Method</Form.Label>
              <Form.Check
                type="radio"
                label="Pay Pal or Credit Card"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="UPI"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="COD (Cash On Delivery)"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Button
                variant="outline-dark">
                Continue
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
