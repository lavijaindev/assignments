const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({
        username:username
    }).then((value) => {
        if(value) {
            res.status(403).send("Admin account already exists. Create Another One");
        } else {
            const newAdmin = new Admin({
                username:username,
                password:password
            });
            newAdmin.save();
            res.status(200).send("Admin is created successfully.");
        }
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;

    Course.findOne({
        title: title
    }).then((value) => {
        if(value) {
            res.status(403).send("Course is already registered.");
        } else {
            const newCourse = new Course({
                title: title,
                description: description,
                price: price,
                imageLink: imageLink,
                published: published
            });
            newCourse.save();
            res.status(200).send({
                message: 'Course created successfully',
                courseId: newCourse._id
            });
        }
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const response = await Course.find({});
        res.json({courses:response});
    } catch(error) {
        res.send("Something is wrong.");
    }
});

module.exports = router;