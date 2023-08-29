'use client';
import { useState } from "react"

export default function Alter(){
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <h1>Atualize o Registro</h1>
            <form onSubmit={handleUpdate}>
                <input
                placeholder="Name"
                type="text"
                onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                }}/>
                <input
                placeholder="E-mail"
                type="email"
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}/>
                <input
                placeholder="Senha"
                type="password"
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}/>
                <button>Alterar</button>
            </form>
        </main>
    )
}