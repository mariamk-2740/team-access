import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export class Statistic extends Component {
    render() {
        return(
            <div className='statistic'>
                <Container>
                    <Row className="content">
                        <h2 className='section-title'>
                            “Women of color who actively engage in the academic
                            community and who... participate in activities that
                            make STEM an accessible career path ultimately persist
                            in STEM through their fourth year of college“
                        </h2>
                        <p>
                            Espinosa - 2011 - Pipelines and pathways Women of color
                            in undergraduate STEM Majors and the College Experiences
                            That Contribute to Persistence
                        </p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Statistic;
