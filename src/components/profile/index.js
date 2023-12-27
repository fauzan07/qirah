import React from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import Link from "next/link";
import { ImCross, ImCheckmark } from "react-icons/im";
import styles from "./profile.module.scss";
const Index = () => {
  return (
    <>
      <section className={`${styles["breadcrum"]}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h2>Profile</h2>
                <p>
                  <span>
                    <Link href="/#">Home</Link>
                  </span>{" "}
                  <span>/</span>
                  <span> Profile</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["profile-content"]} my-5`}>
        <Container>
          <Row>
            <Col lg={3} className="mb-3">
              <h3>User Profile</h3>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <Button variant="outline-dark" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={{ span: 8, offset: 1 }} className="mb-3">
              <h3 className="mb-3">My Orders</h3>
              <div>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>23-12-2023</td>
                      <td>500</td>
                      <td>
                        <ImCross />
                      </td>
                      <td>
                        <ImCross />
                      </td>
                      <td style={{ width: "120px" }}>
                        <Button
                          href=""
                          variant="secondary"
                          size="sm"
                          style={{ width: "70px" }}
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>23-12-2023</td>
                      <td>500</td>
                      <td>
                        <ImCheckmark />
                      </td>
                      <td>
                        <ImCheckmark />
                      </td>
                      <td style={{ width: "120px" }}>
                        <Button
                          href=""
                          variant="secondary"
                          size="sm"
                          style={{ width: "70px" }}
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>23-12-2023</td>
                      <td>500</td>
                      <td>
                        <ImCheckmark />
                      </td>
                      <td>
                        <ImCross />
                      </td>
                      <td style={{ width: "120px" }}>
                        <Button
                          href=""
                          variant="secondary"
                          size="sm"
                          style={{ width: "70px" }}
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
