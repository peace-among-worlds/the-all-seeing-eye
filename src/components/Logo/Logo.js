import React from 'react';
import Tilt from 'react-tilt'
import Eye from './3rdeye.png';
import'./Logo.css';


const Logo = () => {
    return(
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt " options={{ max : 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '25px'}} alt='logo' src={Eye}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;