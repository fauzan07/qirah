import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { CiLock } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import styles from './cart.module.scss';
import { useSelector } from "react-redux";

const index = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <>
            <section className={styles['breadcrumb']}>
                <Container>
                    <Row className={`text-center ${styles['content']}`}>
                        <h2>Cart</h2>
                        <p><span><Link href='/#'>Home</Link></span> <span>/</span><span> Cart</span></p>
                    </Row>
                </Container>
            </section>
            <section className={styles['cart-section']}>
                <Container className=' py-5 h-100'>
                    <Row className='flex justify-content-center align-items-center h-100'>
                        <div className={`${styles['mob-card']} card`}>
                            <div className="card-body p-4">
                                <Col lg={12}>
                                    <h5 className="mb-3"><a href="#!" className="text-body"><i
                                        className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                    <hr />

                                    <div className={`${styles['box-head-mob']} d-flex justify-content-between align-items-center mb-4`}>
                                        <div>
                                            <p className="mb-1">Shopping cart</p>
                                            <p className="mb-0">You have {cart.quantity} items in your cart</p>
                                        </div>
                                        <div>
                                            <p className={`${styles['box-p-mob']} mb-0`}><span className="text-muted">Sort by:</span> <a href="#!"
                                                className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                        </div>
                                    </div>
                                    {cart.products.map((product) => {
                                        const firstImage = product.postImage.length > 0 ? product.postImage[3] : '';
                                        return (
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className={`${styles['content-box-mob']} d-flex justify-content-between`}>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <Image
                                                                    className={styles['productcart-image']}
                                                                    objectFit="containt"
                                                                    layout='responsive'
                                                                    height="80"
                                                                    width="81"
                                                                    alt="product_img"
                                                                    src={firstImage}
                                                                />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>{product.postTopicName}</h5>
                                                                <p className="small fw-bold mb-0">{product.postVariantName1}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div className={styles['product-quantity']} style={{ width: "100px" }}>
                                                                <Image 
                                                                    src='/images/plus.png'
                                                                    height='10'
                                                                    width='10'
                                                                    objectFit='fill'
                                                                    layout='responsive'
                                                                    alt='before-img'
                                                                    className={styles['before-img']}
                                                                />
                                                                <h5 className="fw-normal ps-3 pe-3 mb-0">{product.quantity}</h5>
                                                                <Image 
                                                                    src='/images/minus.png'
                                                                    height='10'
                                                                    width='10'
                                                                    objectFit='fill'
                                                                    layout='responsive'
                                                                    alt='after-img'
                                                                    className={styles['after-img']}
                                                                />
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">{product.price}</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#d7b56d" }}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Col>
                            </div>
                        </div >
                        <Link href="/checkout">
                            <Button
                                style={{ margin: '30px 0px 30px', maxWidth: '250px' }}
                                className={`${styles['newsbtn']} d-flex`}
                                variant="outline-dark" id="button-addon2">
                                <span className='px-2' style={{ marginTop: '-2px' }}><CiLock /></span>
                                <span className='px-2'>Checkout</span>
                                <span className='px-2'>Rs. {cart.total}.00</span>
                            </Button>
                        </Link>
                        <div className='text-center py-5'><h3>YOU MAY ALSO LIKE</h3></div>
                        <div className='row'>
                            <div className='col-lg-3 text-center'>
                                <Image
                                    className={styles['otherproduct-image']}
                                    objectFit="containt"
                                    layout='responsive'
                                    height="100"
                                    width="101"
                                    alt="product-img"
                                    src="/images/product1.png"
                                />
                                <h5>Hair Oil</h5>
                                <p>From Rs. 1,400.00 <span className='text-decoration-line-through'>1,750.00</span></p>
                                <div className='d-flex justify-content-center'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <p className='px-2' style={{ marginTop: '-3px' }}>No reviews</p>
                                </div>
                            </div>
                            <div className='col-lg-3 text-center'>
                                <Image
                                    className={styles['otherproduct-image']}
                                    objectFit="containt"
                                    layout='responsive'
                                    height="180"
                                    width="181"
                                    alt="product-img"
                                    src="/images/product2.png"
                                />
                                <h5>Hair Oil</h5>
                                <p>From Rs. 1,400.00 <span className='text-decoration-line-through'>1,750.00</span></p>
                                <div className='d-flex justify-content-center'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <p className='px-2' style={{ marginTop: '-3px' }}>No reviews</p>
                                </div>
                            </div>
                            <div className='col-lg-3 text-center'>
                                <Image
                                    className={styles['otherproduct-image']}
                                    objectFit="containt"
                                    layout='responsive'
                                    height="180"
                                    width="181"
                                    alt="product-img"
                                    src="/images/product1.png"
                                />
                                <h5>Hair Oil</h5>
                                <p>From Rs. 1,400.00 <span className='text-decoration-line-through'>1,750.00</span></p>
                                <div className='d-flex justify-content-center'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <p className='px-2' style={{ marginTop: '-3px' }}>No reviews</p>
                                </div>
                            </div>
                            <div className='col-lg-3 text-center'>
                                <Image
                                    className={styles['otherproduct-image']}
                                    objectFit="containt"
                                    layout='responsive'
                                    height="180"
                                    width="181"
                                    alt="product-img"
                                    src="/images/product2.png"
                                />
                                <h5>Hair Oil</h5>
                                <p>From Rs. 1,400.00 <span className='text-decoration-line-through'>1,750.00</span></p>
                                <div className='d-flex justify-content-center'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <p className='px-2' style={{ marginTop: '-3px' }}>No reviews</p>
                                </div>
                            </div>
                        </div>
                    </Row >
                </Container >
            </section >
        </>
    )
}

export default index