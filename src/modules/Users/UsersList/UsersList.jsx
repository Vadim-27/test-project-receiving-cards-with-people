import css from './usersList.module.scss'

const UserList = ({ items }) => {
  console.log("items", items)

    const sortedItems = [...items].sort(
      (a, b) => a.position_id - b.position_id
  );
   console.log('sortedItems', sortedItems);
    const element = sortedItems.map(
      ({ id, photo, name, position, email, phone }) => (
        <li className={css.wrapperItem} key={id}>
          <div className={css.avatar}>
            <img className={css.avatar} alt="avatar" src={photo} />
          </div>
          <p className={css.name}>{name}</p>
          <p className={css.position}>{position}</p>
          <p className={css.email}>{email}</p>
          <p className={css.phone}>{phone}</p>
        </li>
      )
    );
    return (
      <div>
        <ul className={css.wrapperList}>{element}</ul>
      </div>
    );
}
export default UserList;