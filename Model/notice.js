const mongoose = require('mongoose');
const noticeSchema = new mongoose.Schema({
  
    title:{
        type: String,
        required:[true, "Please enter title"],
        trim: true,
        maxLength:[50," Name cannot exceed 50 characters" ]
    },
    description:{
        type: String,
        required:[true, "Please enter Your description"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
  
})

module.exports = mongoose.model("Notice", noticeSchema);