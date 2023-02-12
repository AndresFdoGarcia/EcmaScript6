function newUser(user,age,country,uId){
    return { user,
        age,
        country,
        id: uId
    };
}

console.log(newUser('touch',34,'COL',1));