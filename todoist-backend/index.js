const express = require("express")
const connectDB = require("./config/mongoDB")
const cors = require("cors");

connectDB();

const app = express();


app.use(cors());
app.use(express.json())

app.listen(8080, () => {
  console.log("Express server running on port 8080")
});


app.use("/api/v1", require("./controller/taskController"))