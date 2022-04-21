const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter Your Name"],
        trim: true,
        maxLength:[50," Name cannot exceed 50 characters" ]
    },
    email:{
        type: String,
        required:[true, "Please enter Your Email"],
        unique: true,
        trim: true,
    },
    message:{
        type: String,
        required:[true, "Please enter message"],
        trim: true,
         maxLength:[500," Message cannot exceed 500 character"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})

module.exports = mongoose.model("Contact", contactSchema);