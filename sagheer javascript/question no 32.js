let users =["admin" , "kashan" , "abuzar" , "sagheer" , 'owais']
let new_users = ["admin" , "ali" , "faiz" , "kashan"]
for(let i = 0; i<users.length ;i++){
    for(let j = 0 ; j< new_users.length ; j++){
        if(new_users[j] == users[i]){
            console.log(new_users[j] +" is already a user, You will have to enter a new user name !")
            break;
        }
    }
}