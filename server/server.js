const express = require("express");
const app = express();

// cors <3 client

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

// routes

app.get("/api", (req, res) => {
  res.json({
    mugshot: [
      {
        fullName: "Pinocchio",
        bookingNumber: "A12345678",
        arrestDateTime: "2025-02-27T14:30:00Z",
        charges: "Has lied",
        arrestingAgency: "Tuscany Police Department",
        arrestLocation: "Florence, Tuscany, Italy",
      },
    ],
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
