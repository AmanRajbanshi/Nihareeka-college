const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    category:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        required:[true, "Please enter Your Name"],
        trim: true,
        maxLength:[50," Name cannot exceed 50 characters" ]
    },
    description:{
        type: String,
        required:[true, "Please enter Your description"],
        trim: true,
    },
    image:{
        type: String,
        required:[true, "Please insert images here"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Events", eventSchema);