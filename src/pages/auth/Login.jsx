import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ 
        email: '',
        password: '' 
    });
    const [validation, setValidation] = useState(false);

    // store value in localstorage
    const handleSubmit =(e)=>{
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        
        if(input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/dashboard');
        } else {
            setValidation(true);
        }
        
    }

  return (
    <div className='min-h-screen flex items-center justify-center p-4 md:p-6 bg-slate-50'>
        <div className="w-full max-w-lg shadow-sm bg-white rounded-lg p-4 md:p-6">
            <h1 className='text-4xl font-bold mb-6'>Sign up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-left'> 
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        name='email'
                        value={input.email}
                        onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                        type="text"
                        className='w-full border border-slate-300 h-12 px-5 py-2 text-black text-base rounded-lg'
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        name='password'
                        value={input.password}
                        onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                        type="text"
                        className='w-full border border-slate-300 h-12 px-5 py-2 text-black text-base rounded-lg'
                    />
                </div>
                <div>
                    {
                        validation && ( 
                            <div className=" bg-red-200 px-4 py-3 rounded-lg">
                                <p>Invalid credentials</p>
                            </div>
                        )
                    }
                </div>
                <div>
                    <button className="px-10 py-3 bg-green-500 text-white rounded-lg">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login