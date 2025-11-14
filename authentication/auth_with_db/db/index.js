const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://ARSHAD_NADEEM_KHAN:a1f2a3r4@cluster0.jy6bz.mongodb.net/final")

const UserSchema= new mongoose.Schema({
    uname: String,
    pass: Number
})

const CourseSchema= new mongoose.Schema({
    title: String,
    description: String
})


let User= mongoose.model("User", UserSchema)
let Course= mongoose.model("Course", CourseSchema)

module.exports= {User, Course} 










// //{
// //"title":"T1",
// "description":"D1"
// }