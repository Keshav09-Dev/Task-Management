require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.use("/api/v1", require("./routes/taskRoutes"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
