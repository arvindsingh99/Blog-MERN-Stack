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

dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(console.log("Connected")).catch((err) => { console.log(err) });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "req.body.name");
    },
    filename: (req, file, cb) => {
        cb(null, "phone.jpeg");
    },
});

const upload = multer({ storage:storage });
app.post("/api/upload", upload.single('file'), (req, res) =>{
    res.status(200).json("File has been uploaded");
});
// app.use("/", (req, res) => {
// console.log("Hey This is Arvind singh")
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
    console.log("Server is running at port", port);
});

