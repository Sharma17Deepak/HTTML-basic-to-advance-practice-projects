const mongoose = require("mongoose");

//Connect to MongoDB
mongoose.connect("your url");

//Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongooose.model("Admin",AdminSchema);
const User = mongooose.model("Admin",UserSchema);
const Course = mongooose.model("Admin",CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}