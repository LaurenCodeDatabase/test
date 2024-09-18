const express = require("express");
const app = express();
app.use(express.json());
app.get("/",(req,res) => {
    res.status(200).send("Landing Page");
});

app.get("/about",(req,res) => {
    res.status(200).send("About us Page");
});
 const port = 8000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`));
