const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const path = require("path");
const socketIo = require("socket.io");
const config = require("./config");

const port = process.env.PORT || 3000;
const hostname = "0.0.0.0";

const router = require("./router");
const app = express();
const server = http.createServer(app);

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

const io = socketIo(server, {
  cors: {
    origin: frontendUrl,
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Socket, new connection", socket.id);
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(router.init(io));
app.use("/images", express.static(path.join(__dirname, "images")));

mongoose
  .connect(config.db)
  .then(() => {
    console.log("MongoDB connection successful!");
    server.listen(port, hostname, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
