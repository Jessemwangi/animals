import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className='home'>

                <div className='mainlanding'>
                         <Link to={'/animals'} className='homeCard animalsCard'>
                    <div >
                           <h2>Animals
                            </h2> 
                    </div>
                            </Link> 
                        
                  <Link to={'/birds'} className='homeCard birdsCard'>
                    <div > 
                    <h2>
                    Birds
                    </h2>
                </div>
                    </Link> 
                </div>

            </div>
        );
    }
}

export default Home;