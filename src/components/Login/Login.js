import React from 'react';
import google from '../../logos/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    return (
        <div className='w-5/12 rounded mx-auto items-center border-2 pb-20 justify-center'>
            <h2 className='text-4xl font-bold pb-10 pt-5'>Login With</h2>

            <button onClick={() => signInWithGoogle()} className='flex border-2 w-96 py-2 rounded-lg justify-center mx-auto items-center'>
                <img className='h-10 mr-20' src={google} alt="" />
                <p className='text-2xl'>Continue With Google</p>
            </button>
            <p className='pt-2'>Do not have an account? <Link className='text-blue-400' to='/register'>Create an Account</Link></p>

        </div>
    );
};

export default Login;