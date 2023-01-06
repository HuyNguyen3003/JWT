import "./home.css";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletelUsers } from "../../redux/apiRequest";





const HomePage = () => {
  //DUMMY DATA

  const user = useSelector((state) => state.auth.login?.currentUser)
  const userList = useSelector((state) => state.user.users?.allUsers)
  const mgs = useSelector((state) => state.user?.mgs)





  const dispatch = useDispatch()
  const navigate = useNavigate()



  useEffect(() => {
    if (!user) navigate("/login")
    else getAllUsers(user?.accessToken, dispatch)



  }, [])

  const handleDelete = (id) => {
    deletelUsers(user.accessToken, dispatch, id)

  }

  return (
    <main className="home-container">
      <div className="home-title">User Role is:
        {
          user?.admin ? " admin" : "   user"
        }
      </div>
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {userList && userList.length > 0 &&
          userList.map((user) => {
            return (
              <div className="user-container" key={user.id}>
                <div className="home-user">{user.username}</div>
                <div className="delete-user" onClick={() => handleDelete(user._id)}> Delete </div>
              </div>
            );
          })}
      </div>
      <div className="home-title">{mgs ? mgs : ''}</div>

    </main>
  );
};

export default HomePage;
