import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap';
import styles from './blog.module.scss'

const banner = () => {
    return (
        <>
            <section className={styles['breadcrumb']}>
                <Container>
                    <Row className={`text-center ${styles['content']}`}>
                        <h3>Blogs</h3>
                        <p><span>Home</span> <span>/</span><span> Blogs</span></p>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default banner