import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import './header.scss';

const Header = ({currentUser}) => (
    <div className="container">
        <div className="main">
            <div className="logo">
                <h1>
                    <Link to="/"> LOGO </Link>
                </h1>
            </div>
            <div className="nav-item">
                <Link to="/product"> Shop </Link>
                <Link to="/contact"> Contact </Link>
                {currentUser ?
                    <Link onClick={()=>auth.signOut()}>SignOut</Link>
                        :
                        <Link to="/signin"> Sign In </Link>
                }

                {currentUser ?
                        ""
                        :
                        <Link to="/signup"> Sign UP </Link>
                }
                
            </div>
        </div>
    </div>
)

export default Header;