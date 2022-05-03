import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import reflection from '../img/reflection.png';
import resources from '../img/resources.png';
import implementation from '../img/implementation.png';

export class Workshops extends Component {
    render() {
        return(
            <div className="enter-workshop">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h2 className='title'>Blast off with CONNECTA</h2>
                        </Col>
                        <Col lg={1}/>
                        <Col lg={7}>
                            <p>We’ll guide you and 1-5 other TAs through an interactive and collaborative workshop to prepare you for your role.</p>
                            <p>While collaborating together, make sure to complete the workshop through Zoom or another video-call/in-person environment. </p>
                        </Col>
                    </Row>
                    <Row className="enter">
                        <Col md={4} className='reflection'>
                            <h4>Self Awareness and Reflection</h4>
                            <img src={reflection} alt="cartoon character looking in the mirror"/>
                            <button class="button-18" role="button">Start DAY 1</button>
                            <ul className="workshop-preview">
                                <li>Reflection activities</li>
                                <li>Identify values and strength</li>
                                <li>Bias discussion</li>
                            </ul>
                        </Col>
                        <Col md={4} className='resources'>
                            <h4>Skills and Resources</h4>
                            <img src={resources} alt="cartoon character surrounded by tools"/>
                            <button class="button-18" role="button">Start DAY 2</button>
                            <ul className="workshop-preview">
                                <li>Role logistics</li>
                                <li>Helpful tools</li>
                                <li>Conscious habits</li>
                            </ul>
                        </Col>
                        <Col md={4} className='implementation'>
                            <h4>Implementation and Practice</h4>
                            <img src={implementation} alt="cartoon character holding a pencil"/>
                            <button class="button-18" role="button">Start DAY 3</button>
                            <ul className="workshop-preview">
                                <li>Scenario practice</li>
                                <li>First-day planning</li>
                                <li>Tips and tricks</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Workshops;