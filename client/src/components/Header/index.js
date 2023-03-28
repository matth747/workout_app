import React from 'react';

import Auth from '../../utils/auth';
import {Link} from 'react-router-dom'

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <header className='container'>
            <div className='row'>
            <h1 className='col-md-8 col-12'>
                RTM
            </h1>
            {Auth.loggedIn() ? (<>
                <div className='col-md-2 '></div>
                <div className='col-md-2 col-3 my-3'>
                    <button onClick={logout} className="btn btn-secondary">
                    Logout
                    </button>
                </div>
                </>
            ) : (<>
                <div className=' col-md-1 col-2 m-3'>
                    <Link to="/Login">
                        <button className="btn btn-secondary">    
                        Login
                        </button>
                    </Link>
                </div>
                <div className=' col-md-1 col-2 m-3'>
                    <Link to="/Signup">
                        <button className="btn btn-secondary">
                        Signup
                        </button>
                    </Link>
                </div>
                
                </>)}
            </div>
        </header>
    )
}

export default Header;