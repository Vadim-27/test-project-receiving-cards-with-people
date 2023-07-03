import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "redux/users/users-selectors";
import { fetchAllUsers } from "redux/users/users-operation";
import UserList from "./UsersList/UsersList";

const Users = () => {

    const dispatch = useDispatch();
    const allUsers = useSelector(getUsers);
console.log("allUsers", allUsers)
    useEffect(() => {
        dispatch(fetchAllUsers());
    },[dispatch])
 


    return (
      <div>
        <h2>Working with GET request</h2>
        <UserList items={allUsers} />
      </div>
    );
}
export default Users;