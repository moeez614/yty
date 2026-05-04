require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require("./config/db");
const staffchoco = require("./routes/staffRoute");
const diseasechoco = require("./routes/diseaseRoute")
const registerchoco = require("./routes/registerRoute")
const protect = require("./middleware/autMiddleware");
const googlechoco = require("./routes/GoogleRoute")

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
connectDB();
app.use("/api", staffchoco);
app.use("/api", diseasechoco);
app.use("/api", registerchoco);
app.use("/", googlechoco);

app.get("/api/protected", protect, (req, res) => {
    res.status(200).json({ message: "Protected route" });
})

const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server running at http://localhost:${port}`);
});