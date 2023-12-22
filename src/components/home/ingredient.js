import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

const ingredient = () => {
    return (
        <section className={styles['ingredient-main']}>
            <Container>
                <Row className='text-center'>
                <h2 className='mb-5'>Effective Hair Oil</h2>
                    <div className='col-xl-3 col-12'>
                        
                        <Row>
                            <div className={`${styles['ingredient-side-content']} col-xl-12 col-md-6`} style={{ padding: '0px 30px'}}>
                                <Image
                                    height="20"
                                    width="20"
                                    objectFit="contain"
                                    src="/images/coca-leaves.png"
                                    alt="logo_img" />
                                <h4>100% Herbal</h4>
                                <p>We Offer The Highest Quality, 100% Natural Cbd Oils Made By Organic Oil </p>
                            </div>
                            <div className={`${styles['']} col-xl-12 col-md-6`} style={{ padding: '0px 30px'}}>
                                <Image
                                    height="20"
                                    width="20"
                                    objectFit="contain"
                                    src="/images/coca-leaves.png"
                                    alt="logo_img" />
                                <h4>No Chemicals</h4>
                                <p>We Offer The Highest Quality, 100% Natural Cbd Oils Made By Organic Oil </p>
                            </div>
                        </Row>
                    </div>
                    <div className='col-xl-6 col-12' >
                        <div>
                            <Image
                                className={styles['ingredient-image']}
                                height="380"
                                width="500"
                                objectFit="contain"
                                src="/images/productwithingredient.png"
                                alt="logo_img" />
                        </div>
                    </div>
                    <div className='col-xl-3 col-12'>
                        <Row>
                            <div className={`${styles['ingredient-side-content']} col-xl-12 col-md-6`} style={{ padding: '0px 30px'}}>
                                <Image
                                    height="20"
                                    width="20"
                                    objectFit="contain"
                                    src="/images/coca-leaves.png"
                                    alt="logo_img" />
                                <h4>No Perfumes</h4>
                                <p>We Offer The Highest Quality, 100% Natural Cbd Oils Made By Organic Oil </p>
                            </div>
                            <div className={`${styles['']} col-xl-12 col-md-6`} style={{ padding: '0px 30px'}}>
                                <Image
                                    height="20"
                                    width="20"
                                    objectFit="contain"
                                    src="/images/coca-leaves.png"
                                    alt="logo_img" />
                                <h4>100% Natural</h4>
                                <p>We Offer The Highest Quality, 100% Natural Cbd Oils Made By Organic Oil </p>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default ingredient