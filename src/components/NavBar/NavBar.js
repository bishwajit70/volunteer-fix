import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logos/Group 1329.png'

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }

    return (
        <div className='flex justify-between items-center py-5'>
            <div className='logo w-48'>
                <Link to='/'><img className='w-full' src={logo} alt="" /></Link>

            </div>
            <div className='navigation'>
                <Link className='p-5' to='/'>Home</Link>
                <Link className='p-5' to='/donation'>Donation</Link>
                <Link className='p-5' to='/events'>Events</Link>
                <Link className='p-5' to='/blog'>Blog</Link>
                {
                    user ?
                        <Link onClick={handleSignOut} className='p-5' to='/login'>Sign Out</Link>
                        :
                        <Link className='p-5' to='/login'>Login</Link>
                }


            </div>
        </div>

    );
};

export default NavBar;