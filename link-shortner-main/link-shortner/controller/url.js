const shortid = require('shortid');
const url = require('../model/url');

async function generateid(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).send("Please enter a URL").json("error");
    }

    const newId = shortid.generate(); // Generate a new ID for each request

    try {
        await url.create({
            shortid: newId,
            refferalid: body.url
        });
        
        // Send a response with the new ID
        res.status(201).send({ shortid: newId });
    } catch (error) {
        console.error("Error creating new URL entry:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    generateid
};
