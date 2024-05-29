import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
    return (
        <>
            <Header />
            <div style={{ margin: '150px' }} className="container-fluid">
                <div className="d-flex justify-content-between">
                    <h1>Projects</h1>
                    <input className='form-control w-25' type='text' placeholder='Search Projects By language Used' />
                </div>
                <Row className='mt-3'>
                    <Col className='mb-3' sm={12} md={6} lg={4}>
                        <ProjectCard />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Project