import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    return(
        <div className='ProfileInfo'> 
            <div className='closeUserInfo' onClick = {props.closeUserInfo}><i class="far fa-times-circle fa-2x"></i></div>
            <div className='ProfileContent'>
                <h1>Account</h1>
                <div className='userCointainer'>
                    <div className='profilePic'><i class="fas fa-smile fa-4x"></i></div>
                    <h2>{props.userName}</h2>
                </div>
                <div className='About'>
                    <h2>About</h2>
                    <p>Pellentesque nunc lectus, faucibus et rutrum sit amet, vulputate quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div className='Settings'>
                    <h2>Account Settings</h2>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;