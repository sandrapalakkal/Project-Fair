import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/project.png'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card';
import img1 from '../assets/max.jpg'
import img2 from '../assets/Sara.jpg'
import img3 from '../assets/Amir.jpg'
function Home() {
    return (
        <>
            <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
                <div className="container">
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h1 style={{ fondSize: '80px' }}><i className="fa-solid fa-hands-holding-circle me-3 fs-1"></i>
                                Project </h1>
                            <p style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet consectetur  adipisicing elit. Sequi, cum. Soluta vel eos magni dolore voluptatibus, aliquam laudantium inventore pariatur nesciunt optio! Porro explicabo hic sint, consequuntur itaque doloribus distinctio!!
                            </p>
                            <Link to="/login" className="btn btn-warning">START TO EXPLORE</Link>

                        </div>
                        <div className='col-lg-6'>
                            <img className='img-fluid' src={landingImg} alt="landing" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="mt-5 text-center">
                <h1 className='mb-5'>Explore Our Projects</h1>
                <marquee behavior="" direction="">
                    <div className="d-flex">
                        <div className="me-5">
                            <ProjectCard />
                        </div>
                    </div>
                </marquee>
                <button className='btn btn-link mt-3'>Click here to View More Projects...</button>
            </div>
            <div className="d-flex align-items-center mt-5 flex-column">
                <h1>Our Testimonials</h1>
                <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                                <img width={'80px'} height={'80px'} className='rounded-circle img-fluid' src={img1} />
                                <span>Max Miller</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-center">
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                </div>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                                <img width={'80px'} height={'80px'} className='rounded-circle img-fluid' src={img2} />
                                <span>Sara</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-center">
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                </div>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                                <img width={'80px'} height={'80px'} className='rounded-circle img-fluid' src={img3} />
                                <span>Amir</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-center">
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                    <div className="fa-solid fa-star text-warning"></div>
                                </div>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Home