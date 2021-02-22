const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ status: true, msg: "Hello World" });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Streamer Running CTRL+C to exit");
});
