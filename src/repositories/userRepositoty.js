const User = require('../models/userModel');

const users = [];
let currentID = 0;

class UserRepository {
    
    save(userData) {
        const user = User(userData.id, userData.name)
    }
}