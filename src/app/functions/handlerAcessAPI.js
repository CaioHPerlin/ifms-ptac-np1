'use server'

const usersDb = [
    {
        name: "John Doe",
        email: "johndoe@yahoo.com",
        password: "foo",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        name: "Caio Hygino",
        email: "caiocaio@gmail.com",
        password: "caio",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        name: "Vito Vito",
        email: "vito@yahoo.com",
        password: "filhodojales",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
];

const getUserAuthenticated = (user) => {
    for(let i = 0; i < usersDb.length; i++){
        if(user.email == usersDb[i].email && user.password == usersDb[i].password){
            console.log(usersDb[i]);
            return usersDb[i];
        }
    }
}

const getUsers = () => usersDb

export { getUsers, getUserAuthenticated };