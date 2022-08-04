const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomModel = new Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    isAccessible: {
        type: Boolean,
        required: true,
        default: false
    },
    maxOccupancy: {
        type: Number,
    },
    building: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },

})

const Room = mongoose.model('Room', roomModel);
module.exports = Room;