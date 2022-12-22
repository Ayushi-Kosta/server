const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://Ayushi:12345@cluster0.cmsldom.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

// serving the frontend
// app.use(express.static(path.join(_dirname, "./client/build")));

// app.get("*", function(_,res) {
//   res.sendFile(
//     path,join(_dirname, "./netflix-ui/build", "index.html"),
//     function(err) {
//       res.statusCode(500).send(err);
//     }
//   );
// });
//

app.listen(5000, () => {
  console.log("server started on port 5000");
});
