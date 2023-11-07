'use server'

const databaseUrl = 'https://ifms-ptac-2023-2.vercel.app'

const getUserAuthenticated = async (user) => {
    try{
        const response = await fetch(databaseUrl + "/user/authenticated",
        {
            cache:"no-cache",
            method:"POST",
            headers:{"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });

        const userAuth = await response.json();
        return userAuth;
    }catch {
        return {};
    }
}

const createUser = async (user) => {
    try{
        const response = await fetch(databaseUrl + "/user", {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });

        const newUser = await response.json();
        return newUser;
    }catch {
        return {};
    }
}

const getUsers = async () => {
    try{
        const response = await fetch(databaseUrl + "/users", { next: { revalidate: 5 } });
        const users = await response.json();
        
        return users;
    }catch{
        return [];
    }
}

export { getUsers, getUserAuthenticated, createUser };