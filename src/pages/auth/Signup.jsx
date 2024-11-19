import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        fullName: '',
        email: '',
        password: '' 
    });

    // store value in localstorage
    const handleSubmit =(e)=>{
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(input) );
        navigate('/login');
    }

  return (
    <div className='min-h-screen flex items-center justify-center p-4 md:p-6 bg-slate-50'>
        <div className="w-full max-w-lg shadow-sm bg-white rounded-lg p-4 md:p-6">
            <h1 className='text-4xl font-bold mb-6'>Sign up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-left'>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        name='fullName'
                        value={input.fullName}
                        onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                        type="text"
                        className='w-full border border-slate-300 h-12 px-5 py-2 text-black text-base rounded-lg'
                    />
                </div>
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
                    <button className="px-10 py-3 bg-green-500 text-white rounded-lg">Sign up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup