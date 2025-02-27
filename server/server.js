const express = require("express");
const app = express(); 

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOptions));

// create routes

app.get ("/api", (req, res) => {
    res.json({ brands: ["Adidas", "Nike", "Reebook"] });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");  
});

