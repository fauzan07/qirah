import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

const intro = () => {
  return (
    <section className={styles["intro-main"]}>
      <Container>
        <Row className="col-lg-12">
          <Col lg={6}>
            <h2>Use It To Believe It</h2>
            <p>
              <strong>Introducing Qirah Hair Oil :</strong>
              <br />
              <br />
              Your all in one solution for healthier and luscious locks! say
              goodbye to hair fall,dandruff,and hello to increased
              length,nourished growth and strengthened scalp.Transform your hair
              into its most beautiful self with Qirah Hair Oil.
              <br />
              <br />
              Heena Style Affairs our company started its journey 7 years ago
              with its clothing line and then established it's other brands
              Zabacc and Qirah. We believe in delivering quality products to our
              customers and help them solve their problems, be it selfhygiene or
              hair loss, we fix it all. We acknowledge ourselves as a fast
              growing company that will add value to customers life.
            </p>
            <Button
              style={{ marginBottom: "30px" }}
              className={styles["newsbtn"]}
              variant="outline-dark"
              id="button-addon2"
            >
              Shop Now
            </Button>
          </Col>
          <Col lg={6}>
            <Image
              className={styles["intro-image"]}
              height="380"
              width="500"
              objectFit="contain"
              src="/images/displayimage2.png"
              alt="logo_img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default intro;
