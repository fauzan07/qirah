import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
// import dynamic from 'next/dynamic';
import parse from "html-react-parser";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductTestimony from "./productTestimony";
import Accordion from "react-bootstrap/Accordion";
import { VscAccount } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaPlus, FaArrowDown, FaMinus } from "react-icons/fa";
import styles from "./product.module.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { database } from "../../config/Fire";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const ProductDetailsContainer = ({
  productDetailsData: initialProductDetailsData,
}) => {
  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://qirah-dashboard-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState({});
  const [productDetailsData, setProductDetailsData] = useState(
    initialProductDetailsData
  );

  const [product, setProduct] = useState({});
  const dispatch = useDispatch()

  const router = useRouter();
  const { productId } = router.query;

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariants((prevVariants) => ({
      ...prevVariants,
      [productId]: variant,
    }));
  };

  useEffect(() => {
    const productDetailsRef = database.ref("product");
    const handleData = (snapshot) => {
      try {
        if (snapshot && snapshot.val()) {
          const updatedProductDetailsData = snapshot.val();
          setProductDetailsData(updatedProductDetailsData);
        } else {
          console.error("Firebase snapshot is empty or null");
        }
      } catch (error) {
        console.error("Error processing Firebase data:", error);
      }
    };

    productDetailsRef.on("value", handleData);

    return () => {
      productDetailsRef.off("value", handleData);
    };
  }, []);

  const {
    postTopicName,
    postImage,
    postLongDetail,
    postPriceName,
    postPriceName2,
    postVariantName1,
    postVariantName2,
  } = initialProductDetailsData;

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [showReviews, setShowReviews] = useState(true);

  const handleButtonClick = () => {
    setShowReviews(!showReviews);
  };

  const handleClick = () => {
    dispatch(addProduct({
      product,
      ...initialProductDetailsData,
      quantity,
      price: postPriceName * quantity
    }))
  }

  return (
    <>
      <section className={styles["breadcrumb"]}>
        <Container>
          <Row className={`text-center ${styles["content"]}`}>
            <h2>Products</h2>
            <p>
              <span>Home</span> <span>/</span>
              <span> Products</span>
              <span> / </span>
              <span>{postTopicName}</span>
            </p>
          </Row>
        </Container>
      </section>
      <section className={`${styles["productcontent-main"]} py-5`}>
        <Container>
          <Row>
            <Col lg={7}>
              <Carousel>
                {postImage.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-75"
                      src={imageUrl}
                      alt={`Product-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={5}>
              <h3 className="mt-5">{`${postTopicName} (${selectedVariants[productId]?.variantName || "50 ml"
                })`}</h3>

              <div
                className={`d-flex justify-content-between mt-4 ${styles["product-quantity"]}`}
              >
                <div>
                  <p>
                    <strong>₹{selectedVariants[productId]?.price || postPriceName}.00</strong>
                  </p>
                </div>
                {/* <button onClick={handleDecrement}><FaMinus /></button>
                                <div className={`text-center ${styles['quantity-box']}`} style={{ width: '100%', paddingTop: '15px' }}>
                                    <h5>{quantity} Box (1 Pack)</h5>
                                </div>
                                <button onClick={handleIncrement}><FaPlus /></button> */}
                <div>
                  <DropdownButton
                    // style={{ width: "525px" }}
                    variant="outline-dark"
                    title={
                      selectedVariants[productId]
                        ? selectedVariants[productId].variantName
                        : "50 ml"
                    }
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item
                      onClick={() =>
                        handleVariantSelect(productId, {
                          title: postTopicName,
                          price: postPriceName,
                          variantName: postVariantName1,
                        })
                      }
                    >
                      {postVariantName1}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleVariantSelect(productId, {
                          title: postTopicName,
                          price: postPriceName2,
                          variantName: postVariantName2,
                        })
                      }
                    >
                      {postVariantName2}
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>

              <div className={`${styles["price-box"]} mt-3`}>
                <Button
                  onClick={handleClick}
                  style={{ margin: "20px 0px", width: "100%" }}
                  className={styles["newsbtn"]}
                  variant="outline-dark"
                  id="button-addon2"
                >
                  Add To Cart
                </Button>
              </div>

              <h3 className="text-start" style={{ marginTop: "40px" }}>
                Our Ingredients
              </h3>
              <ul>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <li>Coconut Oil</li>
                    <li>Almond Oil</li>
                    <li>Jojoba Oil</li>
                    <li>Rosemary</li>
                    <li>Castor Oil</li>
                    <li>Vitamin E Oil</li>
                  </div>
                  <div>
                    <li>Black Seeds</li>
                    <li>Fenugreek Seeds</li>
                    <li>Curry Leaves</li>
                    <li>Bhringraj</li>
                    <li>Hibiscus</li>
                    <li>Lavendar & Base Q.S</li>
                  </div>
                </div>
              </ul>
            </Col>

            <div className="row justify-content-center">
              <Col lg={10}>
                <div className={`text-center ${styles["Review-section"]}`}>
                  <h3>Verified Reviews</h3>
                </div>
              </Col>
              <Col lg={6}>
                <Button
                  style={{
                    margin: "10px 30px",
                    width: "450px",
                    padding: "10px",
                  }}
                  className={styles["newsbtn"]}
                  variant="outline-dark"
                  id="button-addon2"
                  onClick={handleButtonClick}
                >
                  Reviews
                </Button>
                <div>
                  <ProductTestimony />
                </div>
              </Col>
              <Col lg={6}>
                <Button
                  style={{
                    margin: "10px 70px",
                    width: "450px",
                    padding: "10px",
                  }}
                  className={styles["newsbtn"]}
                  variant="outline-dark"
                  id="button-addon2"
                  onClick={handleButtonClick}
                >
                  Write A Review
                </Button>
                <div className={`${styles['rev-form']} my-4 box shadow rounded-4 p-5`}>
                  <Formik
                    initialValues={{
                      username: "",
                      location: "",
                      email: "",
                      number: "",
                      message: "",
                      postTimestamp: new Date().toUTCString(),
                    }}
                    validationSchema={Yup.object().shape({
                      username: Yup.string().required(
                        "Please enter your full name."
                      ),
                      location: Yup.string().required(
                        "Please select a location."
                      ),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Please enter your email address."),
                      number: Yup.string().required(
                        "Please enter your phone number."
                      ),
                      message: Yup.string().required("Please enter a message."),
                    })}
                    onSubmit={handleFormSubmit}
                  >
                    {(formik) => (
                      <Form method="post">
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Name</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.username && formik.errors.username
                              ? "is-invalid"
                              : ""
                              }`}
                            type="text"
                            name="username"
                            placeholder="Full name"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                          {/* <Form.Control type="text" placeholder="Enter Name" /> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.email && formik.errors.email
                              ? "is-invalid"
                              : ""
                              }`}
                            type="email"
                            name="email"
                            placeholder="Email address"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                          {/* <Form.Control type="email" placeholder="Enter email" /> */}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label>Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter Number" />
                    </Form.Group> */}
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Message</Form.Label>
                          {/* <Field
                            className={`form-control ${
                              formik.touched.message && formik.errors.message
                                ? "is-invalid"
                                : ""
                            }`}
                            type="textarea"
                            rows={3}
                            name="message"
                            placeholder="Type Message..."
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          /> */}
                          <Form.Control
                            as="textarea"
                            placeholder="Type Message..."
                            rows={3}
                          />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                          Submit
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Col>

              {/* {
                                    showReviews ? (
                                        <div className='reviews-show'>
                                            <div>Reviews</div>
                                        </div>
                                    ) : (
                                        <div className='reviews-write'>
                                            <ul>
                                                <li className={`d-flex ${styles['ratingstar']}`}>
                                                    <strong>Rating</strong>
                                                    <ul className={`d-flex ${styles['ratinglist']}`}>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                    </ul>
                                                </li>
                                                <li className={`d-flex ${styles['nameinput']}`}>
                                                    <strong>Name</strong>
                                                    <input type="text" name="author" id="author" autocomplete="off"></input>
                                                </li >
                                                <li className={`d-flex ${styles['tittleinput']}`}>
                                                    <strong>Tittle</strong>
                                                    <input type="text" name="author" id="author" autocomplete="off"></input>
                                                </li >
                                                <li className={`d-flex ${styles['textareainput']}`}>
                                                    <textarea name="content" placeholder="Tell us about your experience here"></textarea>
                                                </li >
                                            </ul >
                                        </div >
                                    )} */}
              <Col lg={12}>
                <div className="text-center mt-5">
                  <h3>FAQ</h3>
                </div>
                <div className="mt-4">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What is the source of protein in this product? Is it
                        natural?
                      </Accordion.Header>
                      <Accordion.Body>
                        All the protein in our pro flavoured variants (Light
                        Cocoa & Cold Coffee) comes from Whey. Isolate is the
                        primary source of protein which is blended with whey
                        concentrate to achieve the required protein
                        concentration. The protein in our unflavoured whey
                        protein concentrate and unflavoured whey protein isolate
                        comes from exactly what they say. All the protein in the
                        product comes from natural sources.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How is this whey protein different from other protein
                        powders?
                      </Accordion.Header>
                      <Accordion.Body>
                        Simply put, this is the cleanest, lightest protein
                        powder available. Whey protein brands typically add
                        artificial flavours, artificial sweeteners, gums &
                        fillers, anti-caking & anti-foaming agents- all in an
                        attempt to make your protein feel like an ice-cream
                        shake. This product has none of that. Hence, this.
                        Protein as light as water- your gut will say 'thank you'
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How is this whey protein different from other protein
                        powders?
                      </Accordion.Header>
                      <Accordion.Body>
                        Simply put, this is the cleanest, lightest protein
                        powder available. Whey protein brands typically add
                        artificial flavours, artificial sweeteners, gums &
                        fillers, anti-caking & anti-foaming agents- all in an
                        attempt to make your protein feel like an ice-cream
                        shake. This product has none of that. Hence, this.
                        Protein as light as water- your gut will say 'thank you'
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How is this whey protein different from other protein
                        powders?
                      </Accordion.Header>
                      <Accordion.Body>
                        Simply put, this is the cleanest, lightest protein
                        powder available. Whey protein brands typically add
                        artificial flavours, artificial sweeteners, gums &
                        fillers, anti-caking & anti-foaming agents- all in an
                        attempt to make your protein feel like an ice-cream
                        shake. This product has none of that. Hence, this.
                        Protein as light as water- your gut will say 'thank you'
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        How is this whey protein different from other protein
                        powders?
                      </Accordion.Header>
                      <Accordion.Body>
                        Simply put, this is the cleanest, lightest protein
                        powder available. Whey protein brands typically add
                        artificial flavours, artificial sweeteners, gums &
                        fillers, anti-caking & anti-foaming agents- all in an
                        attempt to make your protein feel like an ice-cream
                        shake. This product has none of that. Hence, this.
                        Protein as light as water- your gut will say 'thank you'
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>

              <Col lg={10}>
                <div className="text-center py-5">
                  <h3>Our Other Proucts</h3>
                </div>
                <div className="row">
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="100"
                      width="101"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsContainer;
