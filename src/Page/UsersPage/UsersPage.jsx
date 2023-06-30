import Users from "modules/Users/Users";
import css from './usersPage.module.scss'

const UsersPage = () => {
    return (
        <div className={css.container}>
            <Users/>
        </div>
    )
}

export default UsersPage;