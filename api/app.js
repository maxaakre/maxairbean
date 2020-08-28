const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const beansRouter = require("./routes/beans");
const PORT = 5050;

app.use(cors());
app.use(express.json());
app.use("/api/beans", beansRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(_dirname, "/public", "index.html"));
  });
}

app.listen(5050, () => console.log(`Server started on port ${PORT}`));
