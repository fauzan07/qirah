import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { FaLocationDot , FaPhone, FaSquareInstagram} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styles from './contact.module.scss'
const Contact = () => {
  return (
    <>
     <section className={styles['contact-head']}>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className={styles['content']}>
                        <h2>Contact Us</h2>
                    </div>
                </Col>
            </Row>
        </Container>
        </section> 
        <section className={styles['contact-body']}>
            <Container>
                <Row>
                    <Col lg={6}>
                    <div className={`${styles['box-form']} box shadow rounded-4 p-5`}>
                {/* <h3 className="text-secondary fw-bold">Contact Us</h3>
                <hr /> */}
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Number"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
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
              </div>
                    </Col>

                    <Col lg={{span: 5, offset: 1}} className='mt-4'>
                      <p><strong><span style={{color:'#d7b56d'}}><FaLocationDot /></span>&nbsp; Address</strong></p>  
                      <p>TMZ HEALTHCARE <br/>Post Chave Rd,<br/>Bhiwandi,<br/>Thane - 421302,<br/>India</p>
                      <p><strong><span style={{color:'#d7b56d'}}><FaPhone/></span>&nbsp; Get in Touch</strong></p>
                      <p>+91 8104583429</p>
                      <p><strong><span style={{color:'#d7b56d'}}><IoMail /></span>&nbsp; Email address</strong></p>
                      <p>info@qirah-haircare.com</p>
                      <p><strong><span style={{color:'#d7b56d'}}><FaSquareInstagram /></span>&nbsp; Instagram ID</strong></p>
                      <p>qirah_oil</p>

                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact
