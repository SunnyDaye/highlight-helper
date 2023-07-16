require("dotenv").config();

const { PORT } = process.env;

const app = require('./index');


const listener = () => console.log(`Listening on Port ${PORT}!`);

app.listen(PORT, listener);