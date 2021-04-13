var mongoose = require('mongoose');  //2.1


/* Of Users  --  1 */
var messageSchema = mongoose.Schema({
    title: String, 
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String,

})


/* -- 2 */ 
var tasksSchema = mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date,
})

/*    [[1] ; [2]]  */ 
var usersSchema = mongoose.Schema({
    messages: [messageSchema],
    tasks: [tasksSchema],
    firstName: String, 
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
})

module.exports = mongoose.model('users', usersSchema)




