//npm run dev, nodemon, express, cors

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


const express = require('express')
const app = express()

app.use(cors(corsOptions)) // Use this after the variable declaration
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => (console.log("Server started on port 5000")))