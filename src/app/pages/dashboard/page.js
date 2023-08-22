import UserList from "@/app/components/UserList";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
   
    const users = getUsers();

    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <UserList list={users}/>
            </Suspense>
        </div>
    );
};