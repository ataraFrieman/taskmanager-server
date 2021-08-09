const mongoose = require('mongoose')
 ,Base = require('./Base');

const WorkspaceSchema = Base.discriminator('Workspace', mongoose.Schema({
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}))

module.exports = mongoose.model('Workspace')