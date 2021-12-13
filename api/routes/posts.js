const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post")

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userName === req.body.userName) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }

        else res.status(401).json("You can only update your post!");
    } catch (err) {
        res.status(500).json(err);
    }
})


//DELETE POST
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                try {
                    await Post.deleteMany({ userName: user.userName })
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User deleted successfully");
                } catch (err) {
                    res.status(500).json(err);
                }
            }
        } catch (err) {
            res.status(404).json("User not found!");
        }

    } else {
        res.status(401).json("You can delete only your account!");
    }

})


//GET POST

module.exports = router;