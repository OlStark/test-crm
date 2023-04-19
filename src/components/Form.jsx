import { useState } from "react";
import './Form.css'

const Form = ({handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        <div className="form">
            <span>Login</span>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
            />
         
            <span>Password</span>
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button
                type="submit"
                onClick={() => handleClick(email, pass)}
            >sign in
            </button>
        </div>
    )
}

export {Form};