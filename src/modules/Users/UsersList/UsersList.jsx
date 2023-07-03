

const UserList = ({ items }) => {
    console.log("items", items)
    const element = items.map(({ id, name }) => (
        <li key={id}>
            <p>{ name}</p>
        </li>
    ))
    return (
        <div>
            <ul>
                {element}
        </ul>
        </div>
    )
}
export default UserList;