'use server'

const databaseUrl = 'https://ifms-ptac-2023-2.vercel.app'

const getUserAuthenticated = async (user) => {
    const response = await fetch(databaseUrl + "/user/authenticated",
    {
        cache:"no-cache",
        method:"POST",
        headers:{"Content-Type": "Application/json"},
        body: JSON.stringify(user)
    });

    const userAuth = await response.json();
    return userAuth;
}

const getUsers = async () => {
    const response = await fetch(databaseUrl + "/users", { cache:"no-cache" });
    const users = await response.json();
    return users;
}

export { getUsers, getUserAuthenticated };