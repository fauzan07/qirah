import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Shipping = ({styles}) => {
    const handleFormSubmit = async (values, actions) => {
        try {
          await axios.post(
            "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
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
    
  return (
    <>
     <Container>
        <Row className='justify-content-center mt-5'>
            <Col lg={6}>
                
                <h3 className='mb-4'>Shipping</h3>
                <Formik
                    initialValues={{
                      address: "",
                      location: "",
                      city: "",
                      number: "",
                      country: "",
                      postTimestamp: new Date().toUTCString(),
                    }}
                    validationSchema={Yup.object().shape({
                      address: Yup.string().required(
                        "Please enter your Address."
                      ),
                      location: Yup.string().required(
                        "Please select a location."
                      ),
                      city: Yup.string()
                        // .city("Invalid text")
                        .required("Please enter your City name."),
                      number: Yup.string().required(
                        "Please enter your postal code."
                      ),
                      country: Yup.string().required("Please enter your Country name."),
                    })}
                    onSubmit={handleFormSubmit}
                  >
                    {(formik) => (
                      <Form method="post">
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label className={styles['txt-lbl']}>Address</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.address && formik.errors.address
                              ? "is-invalid"
                              : ""
                              }${styles['txt-border']}`}
                            type="text"
                            name="address"
                            placeholder="Enter your Address"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className={styles['txt-lbl']}>City</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.city && formik.errors.city
                              ? "is-invalid"
                              : ""
                              }${styles['txt-border']}`}
                            type="text"
                            name="city"
                            placeholder="Enter City Name"
                          />
                          <ErrorMessage
                            name="city"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className={styles['txt-lbl']}>Postal Code</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.number && formik.errors.number
                              ? "is-invalid"
                              : ""
                              }${styles['txt-border']}`}
                            type="number"
                            name="number"
                            placeholder="Enter postal code"
                          />
                          <ErrorMessage
                            name="number"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className={styles['txt-lbl']}>Country</Form.Label>
                          <Field
                            className={`form-control ${formik.touched.country && formik.errors.country
                              ? "is-invalid"
                              : ""
                              }${styles['txt-border']}`}
                            type="text"
                            name="country"
                            placeholder="Enter Country Name"
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                       
                        
                        <Button variant="outline-dark" type="submit">
                          Continue
                        </Button>
                      </Form>
                    )}
                  </Formik>
            </Col>
        </Row>
        </Container> 
    </>
  )
}

export default Shipping
