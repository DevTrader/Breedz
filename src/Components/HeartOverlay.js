import React from 'react';
import './HeartOverlay.css';
import './animationGlobal.css'

const HeartOverlay = (props) => {
    return(
        <div className='HeartOverlay'>
            <div>
                <i className="fas fa-heart fa-5x"></i>
            </div> 
        </div>
    )
}

export default HeartOverlay;