const mongoose = require('mongoose')
    , Base = require('./Base');

const UserSchema = Base.discriminator('User', mongoose.Schema({
    permissionLevel: {
        type: String,
        enum: ['admin', 'editor', 'viewer'],
        default: 'admin'
    },
    email: {
        type: String
    },
    gitUserName: {
        type: String
    },
    gitpassword: {
        type: String
    },
    workspaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace'
    }]
}))

module.exports = mongoose.model('User')