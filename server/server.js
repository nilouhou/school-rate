require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schoolRouter = require("./routes/schools");

const app = express();

const PORT = process.env.PORT || 5050;

app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);
app.use(express.json());
app.use("/schools", schoolRouter);

app.listen(PORT, () =>
	console.log(`🚀🚀 Server is live @http://localhost:${PORT}`)
);
