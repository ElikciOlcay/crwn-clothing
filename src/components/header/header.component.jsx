import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-iocn/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
            <CartIcon></CartIcon>
        </div>
        { hidden ? null : <CartDropdown/>}
        
    </div>
)




// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);