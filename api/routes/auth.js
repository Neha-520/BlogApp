const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const newUser = new User();
    } catch (err) {
        res.status(500).json(err);
    }
})



//LOGIN