const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

    taskName: {
        type: String,
        required: true

    },
    taskDescription: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: String,
        required: true
    }


})

module.exports=mongoose.model('Task', TaskSchema)