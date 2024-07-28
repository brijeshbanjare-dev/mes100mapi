 const express = require("express");
 require("./db/conn");
 require("./routers/men");

 const MensRanking=require("./models/mens");
const router = require("./routers/men");

 const app=express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);




app.listen(port, ()=>{
    console.log(`Connection is live at port no ${port}`);
})
