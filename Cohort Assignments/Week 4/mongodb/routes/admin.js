const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    await Admin.create({
        username,
        password
    })
    res.json({
        msg : "Admin created successfully !"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const response = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg : "Course created successfully! " , courseId: response._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const data = await Course.find({})
    res.json({data});
});

module.exports = router;