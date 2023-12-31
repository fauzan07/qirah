import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { CiLock } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaPlus, FaArrowDown, FaMinus } from "react-icons/fa";
import styles from './cart.module.scss';
import { useSelector } from "react-redux";


const index = () => {
    const cart = useSelector((state) => state.cart);


    console.log(cart);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


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
                <Container className=' pb-5 h-100'>
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
                                        const firstImage = product.postImage && product.postImage.length > 3 ? product.postImage[3] : '';
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
                                                                <p className="small fw-bold mb-0">{product.selectedVariantName ? product.selectedVariantName : product.postVariantName1}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div className={styles['product-quantity']} style={{ width: "110px" }}>
                                                                <Button variant='outline-dark' style={{fontSize:'8px'}} size='sm' onClick={handleDecrement}><FaMinus /></Button>
                                                                <h5 className="fw-normal ps-3 pe-3 mb-0">{quantity}</h5>
                                                                <Button variant='outline-dark' style={{fontSize:'8px'}} size='sm' onClick={handleIncrement}><FaPlus /></Button>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">{product.selectedVariantPrice ? product.selectedVariantPrice :  product.price}</h5>
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
                        <div className={`${styles['chckout-div']} text-end mt-3`}>

                            <p>Item total<span className='ms-5'>{cart.total}</span></p>
                            <p>Delivery Fees<span className='ms-5'>FREE</span></p>
                            <p>Grand Total<span className='ms-5'>{cart.total}</span></p>

                            <Link href="/checkout">
                                <Button
                                    style={{ margin: '10px 0px 30px', maxWidth: '250px' }}
                                    className={`${styles['newsbtn']} `}
                                    variant="outline-dark" id="button-addon2">
                                    <span className='px-2' style={{ marginTop: '-2px' }}><CiLock /></span>
                                    <span className='px-2'>Checkout</span>
                                    <span className='px-2'>Rs. {cart.total}.00</span>
                                </Button>
                            </Link>
                        </div>
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