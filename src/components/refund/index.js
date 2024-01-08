import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./refund.module.scss";
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
                  <span> Refund Policy</span>
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
              <h3 className="text-center my-5">REFUND POLICY</h3>
              <p>
                We have a no return policy, which means you can't return your
                product once delivered.
                <br />
                <br /> You can cancel the order before it is processed for
                dispatch by contacting our support team at
                support@avimeeherbal.com.
                <br />
                <br /> You can always contact us for any return question at
                support@avimeeherbal.com.
              </p><br/>
              <h5>Damages and issues</h5>
              <p>
                Please inspect your order upon reception and contact us within
                24 hrs of delivery, if the item is defective, damaged or if you
                receive the wrong item, so that we can evaluate the issue and
                make it right.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
