const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({
        username:username
    }).then((value) => {
        if(value) {
            res.status(403).send("User account already exists. Create Another One.");
        } else {
            const newUser = new User({
                username:username,
                password:password
            });
            newUser.save();
            res.status(200).send("User is created successfully.");
        }
    });

});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    try {
        const response = await Course.find({});
        res.json({courses:response});
    } catch(error) {
        res.send("Something is wrong.");
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.decodedData.username;

    await User.updateOne({
        username: username
    },
    {
        "$push": {
            purchasedCourses: courseId
        }
    });
    res.status(200).send("Course is purchased.");
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.decodedData.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.status(200).send(courses);
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username:username,
        password:password
    }).then((value) => {
        if(value) {
            const token = jwt.sign({
                username:username
            }, jwtPassword);
            res.json({token});
        } else {
            res.status(404).send("User account does not exist.");
        }
    });
});

module.exports = router