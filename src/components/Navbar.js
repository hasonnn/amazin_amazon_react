import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests'

const Navbar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut()
    })
  }

  return(
   <nav>
     <NavLink to='/'>Home</NavLink> | 
     <NavLink to='/products'> Products Index</NavLink> |
     {currentUser ? (
       <React.Fragment>
         <NavLink to='/products/new'> New Product</NavLink> |
         <span> Welcome, {currentUser.full_name} </span> 
         <button onClick={handleSignOut}>Sign Out</button>
       </React.Fragment>
     ) : (
       <>
       <NavLink to="/sign_in"> Sign In</NavLink> | 
       <NavLink to="/sign_up"> Sign Up</NavLink> 
       </>
     )}
   </nav>
 )
}

export default Navbar;
