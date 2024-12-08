import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDay();

   // console.log(day);

   let type = "a weekday";
   let adv =" its time to work hard";

   if (day === 0 || day === 6){
    type = "the weekend";
    adv = "its time to have some fun";
   }

    res.render("index.ejs", {
        dayType : "a weekday", 
        advice:"Its time to work Hard",
     })
});

app.listen (port, ()=> {
    console.log(`Server running on port ${port}.`)
});