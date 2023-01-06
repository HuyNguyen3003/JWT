import "./register.css";
import { registerUser } from "../../redux/apiRequest";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handRegister = (e) => {
        e.preventDefault()
        const newUser = {
            email: email,
            username: username,
            password: password
        }
        registerUser(newUser, dispatch, navigate)

    }

    return (
        <section className="register-container">
            <div className="register-title"> Sign up </div>
            <form onSubmit={handRegister}>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email"
                    onChange={(e) => setemail(e.target.value)}
                />
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username"
                    onChange={(e) => setusername(e.target.value)}

                />
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type="submit"> Create account </button>
            </form>
        </section>

    );
}

export default Register;