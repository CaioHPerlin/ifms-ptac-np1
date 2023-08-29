'use client';
import { useState } from "react"

export default function Register(){
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <h1>Registre-se</h1>
            <form onSubmit={handleRegister}>
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
                <button>Registrar</button>
            </form>
        </main>
    )
}