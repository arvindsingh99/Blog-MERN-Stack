const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const postRoute = require("./routes/Posts");
const categoryRoute = require("./routes/Categories");
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(console.log("Connected")).catch((err) => { console.log(err) });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage:storage });
app.post("/api/upload", upload.single('file'), (req, res) =>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
    console.log("Server is running at port", port);
});

