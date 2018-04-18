import React from 'react';
import './dogGrid.css';

const DogGrid = (props) => {
    return(
        <div className = 'dogGridcontainer' onClick={props.selectPic} data-imgurl={props.dogPics} data-index={props.index}>
            <div className = 'dogGrid' data-index = {props.index} data-imgurl={props.dogPics} style = {{backgroundImage: "url(" + props.dogPics + ")"}} >
             {/* <img src={props.dogPics} alt = 'dog' key = 'props.key'></img> */}
            </div>
        </div>

    )
}

export default DogGrid;