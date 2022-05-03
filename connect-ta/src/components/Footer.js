import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export class Footer extends Component {
    render() {
        return(
            <footer className='footer'>
                <Container>
                    <Row className="links">
                        <Col className="link">
                            <h5>CONNEC<span className='underline'>TA</span></h5>
                        </Col>  
                        <Col className="link">
                            <a href="/">Home</a>
                        </Col>
                        <Col className="link">
                            <a target="_blank" rel="noreferrer" href="https://connecta-b3be0.web.app/">About Us</a>
                        </Col>
                        <Col className="link">
                            <a href="/workshops">Start Workshop</a>
                        </Col>
                    </Row>
                    <hr className="footer-divider"/>
                    <Row className="footer-credits">
                        <p>&copy;2022 Privacy - Terms</p>
                    </Row>

                </Container>
            </footer>
        );
    }
}

export default Footer;