const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const pokemonRoutes = require("../routes/pokemon")
dotenv.config();

const app = express();
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"../public")));
app.use("/",pokemonRoutes);


const PORT = 8000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

