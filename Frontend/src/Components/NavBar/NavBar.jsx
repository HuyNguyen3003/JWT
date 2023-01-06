
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logoutUsers } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";



import "./navbar.css";
const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handLogout = (e) => {
    e.preventDefault()

    logoutUsers(dispatch, id, navigate, accessToken)
  }

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home"> Home </Link>
      {user && user.username ? (
        <>
          <p className="navbar-user">Hi, <span> {user.username}  </span> </p>
          <Link to="/logout" className="navbar-logout"
            onClick={(e) => handLogout(e)}
          > Log out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar-login"> Login </Link>
          <Link to="/register" className="navbar-register"> Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
