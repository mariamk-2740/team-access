import React, {Component} from 'react';
import Header from './Header';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import Statistic from './Statistic';
import GetStarted from './GetStarted';
import Footer from './Footer';

export class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Header/>
                <HomeSection1/>
                <HomeSection2/>
                <Statistic/>
                <GetStarted/>
                <Footer/>
            </div>
        );
    }
}

export default Home;