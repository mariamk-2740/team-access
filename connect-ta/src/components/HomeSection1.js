import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export class HomeSection1 extends Component {
    render() {
        return(
            <div className='home-section-1'>
                <Container>
                    <Row className="content">
                        <h2 className='section-title'>Become the best TA you can be</h2>
                        <p>We empower teaching assistants in being successful in their roles through our workshops.</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeSection1;
