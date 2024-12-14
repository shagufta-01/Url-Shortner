const express = require('express')
const app = express();
const port = 9000;
const route = require("./Rourter/route")
const MongooseConnection = require('./connection/connection')
const url = require('./model/url')

MongooseConnection("mongodb://127.0.0.1:27017/short-url");

app.use(express.json()); 

app.use('/',route)
app.get("/:shortid", async (req, res) => {
    try {
        const shortid = req.params.shortid;

        console.log(` the shoet is ${shortid}`);

        const urlinDatabase = await url.findOne({ shortid: shortid });

     
        if (!urlinDatabase) {
            return res.status(404).send("URL not found");
        }
      console.log(`deatail${urlinDatabase.refferalid}`)
      
        res.redirect(urlinDatabase.refferalid);
    } catch (error) {
        console.error("Error in redirect route:", error);
        res.status(500).send("Internal Server Error");
    }
});






app.listen(port,()=>{
    console.log(`The server has started at http://localhost:${port}`);
})