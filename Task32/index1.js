"use strict";
const current_users = ["Maryam", "Aleena", "Ali", "Fawad", "Kalsoom"];
const new_users = ["Mehak", "Zahra", "Kalsoom", "Osama", "Baris"];
for (const new_user of new_users) {
    if (current_users.includes(new_user)) {
        console.log(`Sorry this  username ${new_user} has already been taken`);
    }
    else {
        console.log(`This username ${new_user} is available`);
    }
}
