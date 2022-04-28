import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    // let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/login')
    }

    return (
        <div className='w-5/12 rounded mx-auto items-center border-2 pb-20 justify-center'>
            <h2 className='text-4xl font-bold pb-10 pt-5'>Register As a Volunteer</h2>
            <form onSubmit={handleCreateUser}>

                <input className='border-2 w-96 py-2 rounded-md pl-3 justify-center mx-auto items-center mb-4 ' type="text" name="name" id="name" placeholder='Full Name' />

                <input onBlur={handleEmailBlur} className='border-2 w-96 py-2 rounded-md pl-3 justify-center mx-auto items-center mb-4 ' type="email" name="email" id="email" placeholder='Email' required />

                <input onBlur={handlePasswordBlur} className='border-2 w-96 py-2 rounded-md pl-3 justify-center mx-auto items-center mb-4 ' type="password" name="password" id="password" placeholder='Password' required />

                <input className='border-2 w-96 py-2 rounded-md pl-3 justify-center mx-auto items-center mb-4 ' type="text" name="description" id="description" required placeholder='Description' />

                <input className='border-2 w-96 py-2 rounded-md pl-3 justify-center mx-auto items-center mb-4 ' type="text" name="organize" id="organize" placeholder='Organize books at the Library' />

                <input type="submit" value="Register" className='flex border-2 w-96 py-2 rounded-lg justify-center mx-auto items-center' />

                <p className='pt-2'>Already have an Account? <Link className='text-blue-400' to='/login'>Login </Link></p>
            </form>

        </div>

    );
};

export default Register; <h2>Register As a Volunteer</h2>