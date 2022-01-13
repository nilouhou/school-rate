require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schoolRouter = require("./routes/schools");

const app = express();

const { PORT, CLIENT_URL } = process.env;

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
app.use("/schools", schoolRouter);

app.listen(PORT, () =>
	console.log(`🚀🚀 Server is live @http://localhost:${PORT}`)
);
