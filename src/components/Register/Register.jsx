import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // reset error
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 character or more')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password Should be have at least one upper case character')
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Create Successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className=''>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className='mb-4 w-3/4 py-2 px-4' type="email" name="email" placeholder='Email Address' id="email" required />
                    <br />
                    <input className='mb-4 w-3/4 py-2 px-4'
                        type={showPassword ? 'test' : "password"}
                        name="password"
                        placeholder='Password'
                        id="password" required />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <IoMdEye /> : <IoMdEyeOff />
                        }
                    </span>
                    <br />
                    <input className='btn btn-secondary mb-4 w-3/4' type="submit" value="Register" />
                </form>
                {
                    registerError && <p className='text-red-600'>{registerError}</p>
                }
                {
                    success && <p className='text-green-500'>{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;