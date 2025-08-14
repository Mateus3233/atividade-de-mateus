const userRepository = require('../repositories/userRepository');

class UserService{

    async createUser(userData){
        if(!userData.name || !userData.email) {
            throw new Error 
        }
    }
}