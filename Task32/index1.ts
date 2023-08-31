const current_users:string[]=["Maryam","Aleena","Ali","Fawad","Kalsoom"]
const new_users:string[]=["Mehak","Zahra","Kalsoom","Osama","Baris"]
for ( const new_user of new_users){
    if(current_users.includes(new_user)){
        console.log(`Sorry this  username ${new_user} has already been taken`)
    }
    else{
       console.log(`This username ${new_user} is available`)
    }
}