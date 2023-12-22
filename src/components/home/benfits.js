import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from './home.module.scss';
const Benfits = () => {
  return (
    <>
      <section className={`${styles['benfits']} mt-5`}>
        <Container>
            <Row>
                <Col lg={12}>
                    <h2 className='text-center mb-5 pt-5'>Benefits Of Qirah Hair Oil</h2>
                </Col>
                <Col lg={6}>
                <Image
              className={`${styles["intro-image"]} mb-5`}
              height="380"
              width="500"
              objectFit="contain"
              src="/images/displayimage2.png"
              alt="logo_img"
            />
                </Col>
                <Col lg={6}>
                    <div className=''>
                    <ul>
                        <li>Rapid Hair Fall Control</li>
                        <li>Helps in Hair Growth</li>
                        <li>Increases Hair Length</li>
                        <li>Increases Hair Volume</li>
                        <li>Makes Hair Shiny and Smooth</li>
                        <li>Reduces Dandruff</li>
                        <li>strengthenes Scalp</li>
                        <li>Smells Good</li>
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Benfits
