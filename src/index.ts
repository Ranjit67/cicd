import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    data: "Hello world2222",
  });
});

app.listen(process.env.PORT || 80, () => {
  console.log("Server is listening on port 80");
});
//
