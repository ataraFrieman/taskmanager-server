const mongoose = require('mongoose')
    , Base = require('./Base');

const TaskSchema = Base.discriminator('Task', mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: { type: String },
    description: { type: String },
    status: {
        type: String,
        enum : ['INPROGRESS','WATING','DONE'],
        default: 'NEW'
    },
    
}))

module.exports = mongoose.model('Task')