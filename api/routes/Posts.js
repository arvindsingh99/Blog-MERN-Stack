const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
//Create Post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Update Posts

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findOneAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { useFindAndModify: false }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("You can update only your post!");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});
//Delete Post

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted.");
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("You can delete only your post!");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});
//Get Posts

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get All Post
router.get("/", async (req, res) => {
    try {
        const username = req.query.user;
        const catName = req.query.cat;
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if(catName){
            posts = await Post.find({
                categories: {
                    $in: [catName],
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router