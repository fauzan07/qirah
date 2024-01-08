import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./shipping.module.scss";
const Index = () => {
  return (
    <>
      <section className={`${styles["breadcrum"]}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <p>
                  <span>
                    <Link href="/#">Home</Link>
                  </span>{" "}
                  <span>/</span>
                  <span> Shipping Policy</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["refund"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center my-5">SHIPPING POLICY</h3>
              <h5>Domestic</h5>
              <p>
                Shipping is free of charge within India. Delivery can take up to
                15 days.
              </p>
              <h5>International</h5>
              <p>
                Shipping is chargeable and rate will very according to your pin
                code. Shipping charges will be calculated at the time of your
                checkout.
                <br />
                <br />
                Delivery can take up to 30 days.
                <br />
                <br />
                Custom duty (if any) charged by the recipient's country, will be
                in addition to the shipping charges. It will be borne & paid by
                the customer directly to the courier company.
                <br />
                <br />
                In case of non-delivery of goods, please contact
                support@avimeeherbal.com
              </p>
              <h5>Important</h5>
              <p>
                If your delivery status shows delivered, and you have not
                received the product, please inform us within 24 hrs of such
                status change by reaching out to our customer support. After 48
                hrs courier companies does not accept any POD dispute.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
