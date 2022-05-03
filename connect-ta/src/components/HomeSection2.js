import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class HomeSection2 extends Component {
    render() {
        return(
            <div className='home-section-2'>
                <Container>
                    <Row className="content">
                        <Col className="reflect">
                            <Row>
                                <p>WORKSHOP DAY 1</p>
                                <h2 className="section-title">Reflect</h2>
                                <p>Consider how your identity and biases influence your impact in your role</p>
                            </Row>
                        </Col>
                        <Col className="learn">
                            <Row>
                                <p>WORKSHOP DAY 2</p>
                                <h2 className="section-title">Learn</h2>
                                <p>Gather skills and resources related to your role</p>
                            </Row>
                        </Col>
                        <Col className="reflect">
                            <Row>
                                <p>WORKSHOP DAY 3</p>
                                <h2 className="section-title">Practice</h2>
                                <p>Put your new skills to the test with practice scenarios </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeSection2;
