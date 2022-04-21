const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
  
    title:{
        type: String,
        required:[true, "Please enter title"],
        trim: true,
        maxLength:[50," Name cannot exceed 50 characters" ]
    },
    image:{
        type: String,
        required:[true, "Please enter image here"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
  
})

module.exports = mongoose.model("Gallery", gallerySchema);