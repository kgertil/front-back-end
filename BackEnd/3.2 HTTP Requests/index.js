import express from "expresss";
const app = express();
const port = 3000;

app.get("/",(req, res )=> {
  res.send({"<h1>Hello </h1>"});
});

app.get("/About",(req, res )=> {
  res.send({"<h1>About Me </h1> <p> </p>"});
});

app.get("/Contact",(req, res )=> {
  res.send({"<h1> Contact </h1> <p> </p>"});
});


app.listen(port, () => {
  console.log (`Server has started on port ${port}.`);
})
