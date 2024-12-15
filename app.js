const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/mongoDBConfig");
const authRoutes = require("./routers/authRouter");
const morgan = require("morgan");
const cors = require("cors");

//Load environment
dotenv.config();

//Connect DB
connectDB();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
// app --> router --> controller --> model
