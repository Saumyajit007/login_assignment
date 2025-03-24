import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
interface Props { }

function Signup() {
    const navigate=useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate("/auth/login")
    }
    return (
        <div className='signup'>
            <h1 className='title'>Create Your PopX Account</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className='form'>

                        <div className='input-container'>
                            <input type="text" name="" id="name" className='input' placeholder=' ' />
                            <div className='cut'></div>
                            <label htmlFor="name" className='placeholder'>Name</label>
                        </div>

                        <div className='input-container'>
                            <input type="tel" name='' id="phn-number" className='input' placeholder=' ' />
                            <div className='cut'></div>
                            <label htmlFor="phn-number" className='placeholder'>Phone Number</label>
                        </div>

                        <div className='input-container' >
                            <input type="email" name="" id="email" className='input' placeholder=' ' />
                            <div className='cut'></div>
                            <label htmlFor="email" className='placeholder'>Email address</label>
                        </div>

                        <div className='input-container'>
                            <input type="text" name="" id="password" className='input' placeholder=' ' />
                            <div className='cut'></div>
                            <label htmlFor="password" className='placeholder'>Password</label>
                        </div>

                        <div className='input-container'>
                            <input type="text" name="" id="company" className='input' placeholder=' ' />
                            <div className='cut'></div>
                            <label htmlFor="company" className='placeholder'>Company Name</label>
                        </div>

                        <div className='radio-container'>
                            <p>Are You an Agency?</p>
                            <div className='radio-section'>
                                <label htmlFor="agency-true">yes</label>
                                <input type="radio" name="radio" id="agency-true" value="true" className='radio' />
                                <label htmlFor="agency-false">no</label>
                                <input type="radio" name="radio" id="agency-false" value="false" className='radio' />
                            </div>
                        </div>


                    <div>
                        <button type="submit" className='submit'>Create Account</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup