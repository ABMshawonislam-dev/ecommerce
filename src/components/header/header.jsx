import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdwon from '../cart-dropdown/cart-dropdown';
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
                <CartIcon/>
            </div>
            <CartDropdwon/>
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);