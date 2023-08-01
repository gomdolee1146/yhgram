// const bcrypt = require('bcrypt');
// const saltRound = 10;
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     id:             {type: String, required: true, unique: true},
//     nickname:       {type: String, required: true},
//     password:       {type: String, required: true},
//     createdDate:    {type: Date, default: Date.now}
// })

// userSchema.statics.create = function(_user) {
//     const user = new this({
//         userId:     _user.id,
//         name:       _user.nickname,
//     })

//     user.password = bcrypt.hashSync(_user.password, saltRound);

//     // return await user.save()
//     return user.save()
//         .then(function (document) {
//             return document._id;
//         })
//         .catch(function (err) {
//             return Promise.reject(err)
//         })
// }

// module.exports = mongoose.model('User', userSchema);
