import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './product.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { database } from '../../config/Fire';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Product = ({ productData: initialProductData }) => {
    const [productData, setProductData] = useState(initialProductData);
    const [selectedVariants, setSelectedVariants] = useState({});
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch()

    const handleVariantSelect = (productId, variant) => {
        setSelectedVariants((prevVariants) => ({
            ...prevVariants,
            [productId]: variant,
        }));
    };

    useEffect(() => {
        const productRef = database.ref("product");
        const unsubscribe = productRef.on("value", (snapshot) => {
            try {
                if (snapshot && snapshot.val()) {
                    const updatedProductData = snapshot.val();
                    setProductData(updatedProductData);
                } else {
                    console.error("Firebase snapshot is empty or null");
                }
            } catch (error) {
                console.error("Error processing Firebase data:", error);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleClick = () => {
        dispatch(addProduct({
            product,
            quantity,
            price: product.price * quantity,
        }))
    }


    return (
        <section className={styles['products-main']}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <h6 style={{ color: '#D7B56D' }}>Our Popular Products</h6>
                    <h3 style={{ color: '#D7B56D' }}>Best Sellers</h3>
                    {productData && Object.entries(productData).filter((status) => status[1].postIsActiveStatus == 1).map(([key, item], index) => {
                        const firstImage = item.postImage.length > 0 ? item.postImage[3] : '';
                        return (
                            <Col lg={3} key={key}>
                                {/* <Link href={/product/${(item[1].postTopicName).toLowerCase().split(" ").join("-")}}> */}
                                <Card className={styles['product-card']}>
                                    <Link key={key} href={`/product/${item.postTopicName.toLowerCase().split(" ").join("-")}`}>
                                        <Card.Img
                                            variant="top"
                                            alt="firstImage"
                                            src={firstImage} />
                                    </Link>
                                    <Card.Body className='justify-content-center'>
                                        <Card.Title>
                                            {selectedVariants[key]?.variantName ? (
                                                <>
                                                    {item.postTopicName} {selectedVariants[key].variantName}
                                                </>
                                            ) : (
                                                <>
                                                    {item.postTopicName} ({item.postVariantName1})
                                                </>
                                            )}
                                        </Card.Title>
                                        <Card.Text>
                                            {selectedVariants[key]?.price ? (
                                                <>
                                                    Rs. {selectedVariants[key].price}.00
                                                </>
                                            ) : (
                                                <>
                                                    Rs. {item.postPriceName}.00
                                                </>
                                            )}
                                        </Card.Text>
                                        {/* <Card.Title>{item[1].postTopicName}</Card.Title>
                                            <Card.Text>Rs. {item[1].postPriceName}.00</Card.Text> */}
                                        <InputGroup className="mb-3  justify-content-center">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title={selectedVariants[key] ? selectedVariants[key].variantName : '50 ml'}
                                                id="input-group-dropdown-1"
                                            >
                                                <Dropdown.Item
                                                    onClick={() =>
                                                        handleVariantSelect(key, {
                                                            title: item.postTopicName,
                                                            price: item.postPriceName,
                                                            variantName: item.postVariantName1,
                                                        })
                                                    }
                                                >
                                                    {item.postVariantName1}
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() =>
                                                        handleVariantSelect(key, {
                                                            title: item.postTopicName2,
                                                            price: item.postPriceName2,
                                                            variantName: item.postVariantName2,
                                                        })
                                                    }
                                                >
                                                    {item.postVariantName2}
                                                </Dropdown.Item>
                                            </DropdownButton>
                                            <Button
                                                onClick={handleClick}
                                                className={styles['newsbtn']}
                                                variant="outline-secondary" id="button-addon2">
                                                ADD TO CART
                                            </Button>
                                        </InputGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section >
    )
}

export default Product