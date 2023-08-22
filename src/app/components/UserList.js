export default async function UserList({list}) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return(
        <ul>
            {list.map(user => <li><h3>{user.name} - {user.email}</h3></li>)}
        </ul>
    )
}