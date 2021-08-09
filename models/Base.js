const mongoose = require('mongoose')

const baseOptions = {
    discriminatorKey: 'itemtype', 
    collection: 'items',
};
  
const BaseSchema = mongoose.Schema({
    name: { type: String },
    timeCreated: {
        type: Date,
        default: new Date()
    },
    timeUpdate: {
        type: Date,
         default: new Date()
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
   
},baseOptions)

module.exports = mongoose.model('Base', BaseSchema)

BaseSchema.virtual('isNew').get(() =>{
    return this._id ? false : true;
});

BaseSchema.pre('save', function(next){
    const base = this
    base.name = base.name.replace(/[/\s.]/g, '')
    next();
})

BaseSchema.pre('updateOne', function(next){
    const base = this
    base.timeUpdate = new Date();
    next();
})

BaseSchema.pre('findOneAndUpdate', function(next){
    const base = this
    base.timeUpdate = new Date();
    next();
})