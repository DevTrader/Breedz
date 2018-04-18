import React from 'react';
import './ImageDisplay.css';
import './animationGlobal.css';

const ImageDisplay = (props) => {
    return(
        <div className='ImageDisplay'> 
            <div className='close' onClick = {props.close}><i class="far fa-times-circle fa-2x"></i></div>
            <div className='fave' onClick = {props.fave}><i class="far fa-heart fa-2x"></i></div>
            <div>
                <img src={props.imgSRC}></img>
            </div>
        </div>
    )
}

export default ImageDisplay;