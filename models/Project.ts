const mongoose = require('mongoose')
 ,Base = require('./Base');

const ProjectSchema = Base.discriminator('Project', mongoose.Schema({
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}))

module.exports = mongoose.model('Project')