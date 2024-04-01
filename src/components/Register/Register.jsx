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
        const accepted = e.target.terms.checked;

        console.log(email, password, accepted)

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
        else if (!accepted) {
            setRegisterError("Please accept terms and condition")
            return;
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
                    <input className='mb-4 w-full py-2 px-4' type="email" name="email" placeholder='Email Address' id="email" required />
                    <br />
                    <div className='relative'>
                        <input className=' w-full py-2 px-4'
                            type={showPassword ? 'test' : "password"}
                            name="password"
                            placeholder='Password'
                            id="password" required />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-2'>
                            {
                                showPassword ? <IoMdEye /> : <IoMdEyeOff />
                            }
                        </span>
                    </div>
                    <br />
                    <div className='mb-2'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label className='ml-2 ' htmlFor="terms">Accept out <a href="">terms and condition</a></label>
                    </div>
                    <input className='btn btn-secondary mb-4 w-full' type="submit" value="Register" />
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