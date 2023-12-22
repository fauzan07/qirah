import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "./home.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const testimony = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  return (
    <section className={styles["testimony-main"]}>
      <Container>
        <Row className="text-center">
          <h2 className="mb-4">Our Testimonials</h2>
          <Col lg={12}>
            <OwlCarousel
              className="owl-theme testimonials"
              responsive={state.responsive}
              loop
              nav
              autoplay={true}
              autoplayTimeout={5000}
              dots={false}
            >
              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]}  card-body`}>
                  <p>
                    I Must say Mashallah Mashallah Alhumdulillah Qirah hair oil
                    was so much effective that I have no words....&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow}>
                      view more
                    </span>
                    <Modal centered show={show} onHide={handleClose}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony1.jpg"
                          width="230"
                          height="10"
                          alt="testimony1"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    Mashallah one bottle is about to finish. Mashallah I like
                    your oil. Willing to purchase another one soon once back in
                    town...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow1}>
                      view more
                    </span>
                    <Modal centered show={show1} onHide={handleClose1}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony2.jpg"
                          width="230"
                          height="10"
                          alt="testimony2"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose1}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]}  card-body`}>
                  <p>
                    Hi I just wanted to tell you thanks for your oil actually my
                    youngest daughter who is only 6 years had very bad hair
                    fall...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow2}>
                      view more
                    </span>
                    <Modal centered show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony3.jpg"
                          width="230"
                          height="10"
                          alt="testimony3"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose2}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    After my Deleveries I faced massive hairfall after trying
                    all the hair products under the sun with no result I had
                    given up hope...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow3}>
                      view more
                    </span>
                    <Modal centered show={show3} onHide={handleClose3}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony4.jpg"
                          width="230"
                          height="10"
                          alt="testimony4"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose3}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    Qirah oil is really very effective as post pregnancy
                    hairloss is very depressive but after 4 to 5 use I started
                    feeling the difference...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow4}>
                      view more
                    </span>
                    <Modal centered show={show4} onHide={handleClose4}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony5.jpg"
                          width="230"
                          height="10"
                          alt="testimony5"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose4}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    My hair fall has stopped and they aren't frizzy like before
                    Alhumdulillah after the wash my hair weren't greasy and
                    oily...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow5}>
                      view more
                    </span>
                    <Modal centered show={show5} onHide={handleClose5}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony6.jpg"
                          width="230"
                          height="10"
                          alt="testimony6"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose5}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    This oil is miracle about to buy second bottle it is a must
                    try oil because it stopped my hair fall in just two
                    applications of it...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow6}>
                      view more
                    </span>
                    <Modal centered show={show6} onHide={handleClose6}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony7.jpg"
                          width="230"
                          height="10"
                          alt="testimony7"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose6}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    Good quality hair oil. It was just as described and is
                    effective. It makes hair grow quicker and look
                    shinier...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow7}>
                      view more
                    </span>
                    <Modal centered show={show7} onHide={handleClose7}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony8.jpg"
                          width="230"
                          height="10"
                          alt="testimony8"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose7}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    I have used many products and different types of oil but
                    never satisfied with their results. But since 2 months I am
                    using qirah oil...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow8}>
                      view more
                    </span>
                    <Modal centered show={show8} onHide={handleClose8}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony9.jpg"
                          width="230"
                          height="10"
                          alt="testimony9"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose8}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>

              <div className="card item h-100 shadow-sm mx-2">
                <div className={`${styles["testimonial-body"]} card-body`}>
                  <p>
                    My hair is my beauty,as you all have seen but the secret to
                    my beautiful long hair is Qirah Hair oil. In March
                    2022,I coloured my hair...&nbsp;
                    <span className={styles["view-btn"]} onClick={handleShow9}>
                      view more
                    </span>
                    <Modal centered show={show9} onHide={handleClose9}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="text-center">
                        <Image
                          src="/images/testimony10.jpg"
                          width="230"
                          height="10"
                          alt="testimony10"
                          className={styles["testi-image"]}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose9}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default testimony;
