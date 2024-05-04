import express from "express";
import "dotenv/config";
// import fs from "fs";
// import path from "path";
// import { Transform } from "stream";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    data: "Hello world",
  });

  // // const readFile = fs.readFileSync(path.join(__dirname, "..", "sample.txt"));
  // const readStream = fs.createReadStream(
  //   path.join(__dirname, "..", "sample.txt")
  // );
  // const writeStream = fs.createWriteStream(
  //   path.join(__dirname, "..", "output.txt")
  // );
  // // readStream.on("data", (chunk) => writeStream.write(chunk));
  // // readStream.on("end", () => {
  // //   console.log("close");
  // //   res.write("end");
  // //   writeStream.close();
  // //   res.end();
  // // });
  // const wordReplace = new Transform({
  //   transform(chunk, end, callBack) {
  //     const makeEverythingUpperCase = chunk.toString().toUpperCase();
  //     callBack(null, makeEverythingUpperCase);
  //   },
  // });

  // readStream.pipe(wordReplace).pipe(writeStream);

  // res.end("end here");
});

app.listen(process.env.PORT || 80, () => {
  console.log("Server is listening on port 80");
});
//
