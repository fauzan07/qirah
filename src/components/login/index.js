import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import Image from 'next/image';
import styles from './login.module.scss'

const login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <>
            <section className={styles['login-section']}>
                <Container>
                    <div className="text-center">
                        <Image
                            key=""
                            height="180"
                            width="180"
                            objectFit="contain"
                            src="/images/logo.jpg"
                            alt="logo_img"
                        />
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-5 col-lg-5">
                            <div className="mt-4 px-5 py-4 bg-white border shadow-lg rounded signup-box">
                                <h2 className="text-center">Login</h2>
                                <div>{error && <Error>Something went wrong...</Error>}</div>
                                <div className="form-group">
                                    <label htmlFor="email">UserName</label>
                                    <input type="text" className="form-control" id="email" name="email" value={username} placeholder="Enter a username" onChange={(event) => setUsername(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter a password" onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <button onClick={handleClick} className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" disabled={isFetching}>Login Now</button>
                                </div>
                                {/* <div className="or py-3">
                                    <h3><span>or</span></h3>
                                </div> */}
                                <div className="row pt-3">
                                    <div className="col-lg-12 text-center">
                                        <p class="text-center"> Don't have an account?  <Link href="/SignUp">Sign up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default login