import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


export class GetStarted extends Component {
    render() {
        return(
            <div className='get-started'>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <h2 className='section-title'>Ready to get started?</h2>
                            <p> Your workshop is a click away</p>
                        </Col>
                        <Col lg={1}/>
                        <Col lg={4}>
                            <Link to='workshops'><button class="button-18" role="button">Start Workshop</button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GetStarted;
