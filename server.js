const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const app = express();

app.use(bodyParser.json());

const mongoURL = require("./config/keys").mongoURL;

mongoose
  .connect(mongoURL)
  .then(() => console.log("connected to database"))
  .catch((error) => console.log("failed to connect database: ", error));

// dummy payload test

// routing
app.use("/api/items", items);

app.listen(4000, () => {
  console.log("listning on port 4000");
});

// dummy payload test
// const dummyPayload = {
//     name: "dummy user",
//     items: {
//       item1: "apple",
//       item2: "orange",
//     },
//   };
//   const insert = async () => {
//     await collName.insertOne(dummyPayload);
//   };

//   insert();
//
