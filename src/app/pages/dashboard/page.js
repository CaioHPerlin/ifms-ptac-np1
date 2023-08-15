import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   
    const users = getUsers();

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
            {users.map(user => <li><h3>{user.name} - {user.email}</h3></li>)}
            </ul>
        </div>
    );
};