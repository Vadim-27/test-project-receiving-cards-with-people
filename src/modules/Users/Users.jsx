import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "redux/users/users-selectors";
import { fetchAllUsers } from "redux/users/users-operation";
import UserList from "./UsersList/UsersList";
import css from './users.module.scss'

const Users = () => {
    const [isLimit, setLimit] = useState(6);
console.log("isLimit", isLimit)
    const dispatch = useDispatch();
    const allUsers = useSelector(getUsers);
console.log("allUsers", allUsers)
    useEffect(() => {
      dispatch(fetchAllUsers(isLimit));
    }, [dispatch, isLimit]);
 


    return (
      <div>
        <h2 className={css.title}>Working with GET request</h2>
        <UserList items={allUsers} />
        <button type="button" className={css.button} onClick={()=>{setLimit(prevLimit=>prevLimit+6)}}>Show more</button>
      </div>
    );
}
export default Users;