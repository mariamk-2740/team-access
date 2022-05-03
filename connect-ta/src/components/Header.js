import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

export class Header extends Component {
    render() {
        return(
            <div className='header'>
                <Container>
                    <Row>
                        <Col className="description" lg={6}>                
                            <h2 className='title'>Prepare for Impact</h2>
                            <p>A space to equip teaching assistants with training tools to foster belonging and inclusion in the classroom.</p>
                            <Link to='workshops'><button class="button-18" role="button">Start Workshop</button></Link>
                        </Col>
                        <Col className="image" lg={6}>
                            <img className="logo" src={logo} alt="logo"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;
