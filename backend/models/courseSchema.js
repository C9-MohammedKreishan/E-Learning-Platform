const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseTitle : { type:String, required: true},
    courseDiscription : { type:String, required: true},
    courseRate : {type: mongoose.Schema.Types.ObjectId, ref: "rates" },
    courseInstructor: {type: mongoose.Schema.Types.ObjectId, ref: "user",required: true},
    courseCategory: {type: mongoose.Schema.Types.ObjectId, ref: "category",required: true}

})

const model = mongoose.model(`course`, courseSchema)
module.exports = model






