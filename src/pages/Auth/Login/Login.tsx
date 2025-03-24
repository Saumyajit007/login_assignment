import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
interface Props {}

const Login = (props: Props) => {
    const navigate = useNavigate();
    const handleLoginSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        navigate('/final');
    }

  return (
    <div className="container">
        <div className="login-box">
            <div className='headline'>
            <h2>Signin to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <form onSubmit={handleLoginSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email address"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password"/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
