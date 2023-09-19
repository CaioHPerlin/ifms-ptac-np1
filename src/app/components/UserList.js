export default async function UserList({list}) {
    await new Promise((resolve) => setTimeout(resolve, 750))
    return(
        <code>
            {list.map(user => <h3>{user.name} — {user.email}</h3>)}
        </code>
    )
}