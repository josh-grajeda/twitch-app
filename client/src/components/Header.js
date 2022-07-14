import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Twitch
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;


//Client Id
// 912652919401-2pcdmfm5idoipuq8rhd6vumoo948vfnc.apps.googleusercontent.com