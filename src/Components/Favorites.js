import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    return(
        <div className='Favorites'> 
            <div className='closeFave' onClick = {props.closeFave}><i class="far fa-times-circle fa-2x"></i></div>
            <div className='favorites-container'>
                <div className = 'faveGridContainer'>
                <div className = 'favoritesScroll'>
                    <div className = 'faveGridContent'>
                        {props.faves.map((fave, i) => {
                            let image = props.imgArr[fave];
                            return <div className = 'faveGrid' style = {{backgroundImage: "url(" + image + ")"}}></div>
                        })}
                        
                    </div>
                </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Favorites;