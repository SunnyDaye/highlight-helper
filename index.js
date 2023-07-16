const express = require("express");
const app = express();

app.use(express.json());

//TODO: Implement homepage response
app.get("/", (req,res) => {
    res.json({message: 'Hello World!'});
});

//TODO: Implement not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//TODO: Implement error handler
app.use((error, req, res, next) => {  // ! Handles all errors
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });


module.exports = app;