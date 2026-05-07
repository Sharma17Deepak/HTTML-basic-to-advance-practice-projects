const mongoose = require("mongoose");

//Connect to MongoDB
mongoose.connect("mongodb+srv://admin:Deepak098%40@cluster0.farjfaj.mongodb.net/");

//Define schemas
const AdminSchema = new mongoose.Schema({

});

const UserSchema = new mongoose.Schema({

});

const CourseSchema = new mongoose.Schema({

});

const Admin = mongooose.model("Admin",AdminSchema);
const User = mongooose.model("Admin",UserSchema);
const Course = mongooose.model("Admin",CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}